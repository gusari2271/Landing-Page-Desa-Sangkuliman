import os
import re

# Get all files in public/images
disk_files = set()
for root, dirs, files in os.walk('public/images'):
    for f in files:
        if not f.startswith('.'):
            rel = os.path.relpath(os.path.join(root, f), 'public').replace('\\', '/')
            disk_files.add('/' + rel)

# Find all /images/ strings in src/
pattern = re.compile(r'/images/[^"\'`\s,]+')
src_refs = set()
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.js', '.jsx', '.ts', '.tsx', '.html', '.css')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fp:
                for match in pattern.findall(fp.read()):
                    src_refs.add(match)

print("--- REFERENCES IN SRC THAT EXIST ON DISK ---")
exists = [r for r in sorted(src_refs) if r in disk_files]
for r in exists:
    print("  EXISTS:", r)

print("\n--- REFERENCES IN SRC NOT ON DISK (or mismatch case) ---")
missing = [r for r in sorted(src_refs) if r not in disk_files]
for r in missing:
    print("  MISSING:", r)
