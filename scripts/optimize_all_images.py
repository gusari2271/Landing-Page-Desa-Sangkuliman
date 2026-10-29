import os
import shutil
from PIL import Image, ImageOps

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_IMAGES = os.path.join(BASE_DIR, 'public', 'images')
BACKUP_DIR = os.path.join(BASE_DIR, '_backup_raw_images')

def backup_images():
    if not os.path.exists(BACKUP_DIR):
        print(f"Creating backup in {BACKUP_DIR}...")
        shutil.copytree(PUBLIC_IMAGES, BACKUP_DIR)
        print("Backup complete.")
    else:
        print("Backup directory already exists. Skipping backup.")

def optimize_and_convert():
    print("Starting image optimization & WebP conversion...")
    converted_count = 0
    total_orig_bytes = 0
    total_new_webp_bytes = 0
    
    for root, dirs, files in os.walk(PUBLIC_IMAGES):
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext in ('.jpg', '.jpeg', '.png', '.webp'):
                src_path = os.path.join(root, f)
                orig_size = os.path.getsize(src_path)
                total_orig_bytes += orig_size
                
                # Determine target webp path
                base_name = os.path.splitext(f)[0]
                webp_path = os.path.join(root, f"{base_name}.webp")
                
                try:
                    with Image.open(src_path) as img:
                        # Correct EXIF rotation
                        img = ImageOps.exif_transpose(img)
                        
                        # Determine max dimension
                        lower_name = f.lower()
                        is_hero_or_cover = 'hero' in root.lower() or 'cover' in lower_name
                        max_dim = 1920 if is_hero_or_cover else 1360
                        
                        w, h = img.size
                        if max(w, h) > max_dim:
                            if w > h:
                                new_w = max_dim
                                new_h = int(h * (max_dim / w))
                            else:
                                new_h = max_dim
                                new_w = int(w * (max_dim / h))
                            img_resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
                        else:
                            img_resized = img
                        
                        # Check transparency
                        has_alpha = False
                        if img_resized.mode in ('RGBA', 'LA') or (img_resized.mode == 'P' and 'transparency' in img_resized.info):
                            im_rgba = img_resized.convert('RGBA')
                            extrema = im_rgba.getextrema()
                            if extrema[3][0] < 255:
                                has_alpha = True
                        
                        # Save WebP
                        if has_alpha:
                            img_resized.convert('RGBA').save(webp_path, format='WEBP', quality=82, method=6)
                        else:
                            img_resized.convert('RGB').save(webp_path, format='WEBP', quality=82, method=6)
                            
                        new_webp_size = os.path.getsize(webp_path)
                        total_new_webp_bytes += new_webp_size
                        
                        # Also optimize the original file in-place if it is jpg or png
                        # so no broken image if old URL is hit
                        if ext in ('.jpg', '.jpeg'):
                            img_resized.convert('RGB').save(src_path, format='JPEG', quality=80, optimize=True, progressive=True)
                        elif ext == '.png':
                            # For photos mistakenly saved as png, compress or convert
                            if not has_alpha:
                                # Save optimized png
                                img_resized.convert('RGB').save(src_path, format='PNG', optimize=True)
                            else:
                                img_resized.convert('RGBA').save(src_path, format='PNG', optimize=True)
                                
                        converted_count += 1
                        print(f"[{converted_count}] {f} -> {base_name}.webp: {orig_size/1024:.1f}KB -> {new_webp_size/1024:.1f}KB ({((orig_size - new_webp_size)/orig_size)*100:.1f}% reduction)")
                        
                except Exception as e:
                    print(f"Error processing {src_path}: {e}")

    # Aliases for convenience & backward compatibility
    # 1. Hero cover
    hero_dir = os.path.join(PUBLIC_IMAGES, 'hero')
    hero_orig = os.path.join(hero_dir, 'Desa Sangkuliman 1 hero page.webp')
    hero_cover = os.path.join(hero_dir, 'cover.webp')
    hero_jpg = os.path.join(hero_dir, 'cover.jpg')
    if os.path.exists(hero_orig):
        shutil.copy2(hero_orig, hero_cover)
        with Image.open(hero_cover) as im:
            im.convert('RGB').save(hero_jpg, format='JPEG', quality=80)
        print("Created hero aliases: cover.webp, cover.jpg")
        
    # 2. Bekantan cover
    bekantan_dir = os.path.join(PUBLIC_IMAGES, 'bekantan')
    b_cov2_webp = os.path.join(bekantan_dir, 'bekantancover2.webp')
    b_cov_webp = os.path.join(bekantan_dir, 'cover.webp')
    b_cov_png_webp = os.path.join(bekantan_dir, 'bekantancover.webp')
    if os.path.exists(b_cov2_webp):
        shutil.copy2(b_cov2_webp, b_cov_webp)
        shutil.copy2(b_cov2_webp, b_cov_png_webp)
        print("Created bekantan aliases: cover.webp, bekantancover.webp")
        
    # 3. Danau saguntur cover
    ds_dir = os.path.join(PUBLIC_IMAGES, 'danau-saguntur')
    ds_cov_webp = os.path.join(ds_dir, 'cover.webp')
    ds_cov_jpg = os.path.join(ds_dir, 'cover.jpg')
    if os.path.exists(ds_cov_webp) and not os.path.exists(ds_cov_jpg):
        with Image.open(ds_cov_webp) as im:
            im.convert('RGB').save(ds_cov_jpg, format='JPEG', quality=80)
        print("Created danau-saguntur alias: cover.jpg")

    # 4. Tanjung rappeh cover
    tr_dir = os.path.join(PUBLIC_IMAGES, 'tanjung-rappeh')
    tr_cov_webp = os.path.join(tr_dir, 'cover.webp')
    tr_cov_jpg = os.path.join(tr_dir, 'cover.jpg')
    if os.path.exists(tr_cov_webp) and not os.path.exists(tr_cov_jpg):
        with Image.open(tr_cov_webp) as im:
            im.convert('RGB').save(tr_cov_jpg, format='JPEG', quality=80)
        print("Created tanjung-rappeh alias: cover.jpg")

    # 5. Kuliner cover
    kuliner_dir = os.path.join(PUBLIC_IMAGES, 'kuliner')
    iwak_webp = os.path.join(kuliner_dir, 'iwak-basumap.webp')
    kul_cov_webp = os.path.join(kuliner_dir, 'cover.webp')
    kul_cov_jpg = os.path.join(kuliner_dir, 'cover.jpg')
    if os.path.exists(iwak_webp):
        shutil.copy2(iwak_webp, kul_cov_webp)
        with Image.open(kul_cov_webp) as im:
            im.convert('RGB').save(kul_cov_jpg, format='JPEG', quality=80)
        print("Created kuliner aliases: cover.webp, cover.jpg")
        
    # 6. Pemukiman 1990 cover
    p_dir = os.path.join(PUBLIC_IMAGES, 'pemukiman-1990')
    p_cov_webp = os.path.join(p_dir, 'coverpemukiman.webp')
    p_cov_std = os.path.join(p_dir, 'cover.webp')
    if os.path.exists(p_cov_webp):
        shutil.copy2(p_cov_webp, p_cov_std)
        print("Created pemukiman-1990 alias: cover.webp")

    # 7. Luah kijang & luah ulaman & luah palla covers
    for folder in ['luah-kijang', 'luah-palla', 'luah-ulaman', 'tanjung-palla']:
        f_dir = os.path.join(PUBLIC_IMAGES, folder)
        cov_webp = os.path.join(f_dir, 'cover.webp')
        one_webp = os.path.join(f_dir, '1.webp')
        print(f"Ensuring {folder} has cover.webp and 1.webp: exists={os.path.exists(cov_webp)}")

    print("\n==========================================")
    print(f"OPTIMIZATION FINISHED!")
    print(f"Total original processed size: {total_orig_bytes / (1024*1024):.2f} MB")
    print(f"Total new WebP files size:    {total_new_webp_bytes / (1024*1024):.2f} MB")
    print(f"Overall reduction:            {((total_orig_bytes - total_new_webp_bytes) / total_orig_bytes)*100:.1f}%")
    print("==========================================")

if __name__ == '__main__':
    backup_images()
    optimize_and_convert()
