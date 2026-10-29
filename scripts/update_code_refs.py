import os
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(BASE_DIR, 'src')
PUBLIC_IMAGES = os.path.join(BASE_DIR, 'public', 'images')

# Mapping of replacements
# Any /images/...png or /images/...jpg or /images/...JPG to .webp
def update_references():
    pattern = re.compile(r'/images/([a-zA-Z0-9_\-\s]+)/([a-zA-Z0-9_\-\s]+)\.(jpg|jpeg|png|JPG|PNG)')
    
    changed_files = 0
    total_replacements = 0
    
    for root, dirs, files in os.walk(SRC_DIR):
        for f in files:
            if f.endswith(('.js', '.jsx', '.ts', '.tsx', '.html', '.css')):
                file_path = os.path.join(root, f)
                with open(file_path, 'r', encoding='utf-8') as fp:
                    content = fp.read()
                
                def replacer(m):
                    folder = m.group(1)
                    name = m.group(2)
                    # Check if folder/name.webp exists
                    webp_rel = os.path.join(PUBLIC_IMAGES, folder, f"{name}.webp")
                    if os.path.exists(webp_rel):
                        return f"/images/{folder}/{name}.webp"
                    # Try cover.webp if it was coverpemukiman or similar
                    cov_webp = os.path.join(PUBLIC_IMAGES, folder, "cover.webp")
                    if 'cover' in name and os.path.exists(cov_webp):
                        return f"/images/{folder}/cover.webp"
                    # Default: return .webp
                    return f"/images/{folder}/{name}.webp"

                new_content, count = pattern.subn(replacer, content)
                
                # Special fixes for specific paths
                # 1. bekantancover.png -> cover.webp
                new_content = new_content.replace('/images/bekantan/bekantancover.webp', '/images/bekantan/cover.webp')
                new_content = new_content.replace('/images/bekantan/bekantancover2.webp', '/images/bekantan/cover.webp')
                
                # 2. Hero page
                new_content = new_content.replace('/images/hero/cover.jpg', '/images/hero/cover.webp')
                
                # 3. Danau saguntur cover
                new_content = new_content.replace('/images/danau-saguntur/cover.jpg', '/images/danau-saguntur/cover.webp')
                new_content = new_content.replace('/images/danau-saguntur/cover.png', '/images/danau-saguntur/cover.webp')

                # 4. Tanjung rappeh cover
                new_content = new_content.replace('/images/tanjung-rappeh/cover.jpg', '/images/tanjung-rappeh/cover.webp')
                new_content = new_content.replace('/images/tanjung-rappeh/cover.png', '/images/tanjung-rappeh/cover.webp')

                # 5. Kuliner cover
                new_content = new_content.replace('/images/kuliner/cover.jpg', '/images/kuliner/cover.webp')
                
                # 6. Pemukiman 1990 cover
                new_content = new_content.replace('/images/pemukiman-1990/coverpemukiman.png', '/images/pemukiman-1990/coverpemukiman.webp')

                # 7. Hero in Hero.jsx
                new_content = new_content.replace('/images/hero/Desa Sangkuliman 1 hero page.png', '/images/hero/Desa Sangkuliman 1 hero page.webp')

                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as fp:
                        fp.write(new_content)
                    print(f"Updated: {os.path.relpath(file_path, BASE_DIR)} ({count} regex matches replaced)")
                    changed_files += 1
                    total_replacements += count

    print(f"\nDone! Modified {changed_files} files with {total_replacements} replacements.")

if __name__ == '__main__':
    update_references()
