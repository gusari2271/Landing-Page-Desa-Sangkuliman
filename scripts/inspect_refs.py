import os
import re

pattern = re.compile(r'/images/[^"\'`\s]+')
refs = {}
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.js', '.jsx', '.ts', '.tsx', '.html', '.css')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as fp:
                content = fp.read()
                matches = pattern.findall(content)
                if matches:
                    refs[path] = sorted(list(set(matches)))

for p, m in refs.items():
    print(f'{p}: ({len(m)} references)')
    for match in m:
        print(f'   {match}')
