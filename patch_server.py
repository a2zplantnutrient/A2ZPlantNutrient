import re

with open('/app/backend/server.py', 'r') as f:
    content = f.read()

with open('/app/gallery_seed.py', 'r') as f:
    seed_content = f.read()
    
# Extract the list from seed_content
list_str = seed_content.replace('gallery_media_list = ', '').strip()

# Find the initial_media array in server.py
# We'll replace the existing initial_media with our new massive one
pattern = r'initial_media = \[.*?\]\n    for m in initial_media:'
replacement = f'initial_media = {list_str}\n    for m in initial_media:'

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('/app/backend/server.py', 'w') as f:
    f.write(new_content)

print("Server patched!")
