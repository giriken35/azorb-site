import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

def get_block(n):
    pattern = r'          \{/\* Product ' + str(n) + r'.*?(?=          \{/\* Product |        </div>\n      </section>)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        return match.group(0)
    return ""

p1 = get_block(1)
p2 = get_block(2)
p3 = get_block(3)
p4 = get_block(4)
p5 = get_block(5)

prefix = content.split(p1)[0]
suffix_start = content.find(p5) + len(p5)
suffix = content[suffix_start:]

new_content = prefix + p4 + p1 + p3 + p5 + p2 + suffix

with open('app/page.tsx', 'w', encoding='utf-8', newline='\n') as f:
    f.write(new_content)
