#!/usr/bin/env python3
"""Generate animated logo GIF for Sri Tejaswini Packers & Movers"""

from PIL import Image, ImageDraw, ImageFont
import math
import os

# Output path
output_path = os.path.join(os.path.dirname(__file__), "..", "public", "logo.gif")

# Frame settings - wider layout with text left 2/3, truck right 1/3
WIDTH, HEIGHT = 480, 100
NUM_FRAMES = 60
FRAME_DURATION = 50  # ms per frame

# Colors
BG_COLOR = (15, 23, 42)  # slate-900
TRUCK_BODY = (16, 185, 129)  # emerald-500
TRUCK_CAB = (5, 150, 105)  # emerald-600
TRUCK_WINDOW = (167, 243, 208)  # emerald-200
GROUND = (148, 163, 184)  # slate-400
TEXT_COLOR = (255, 255, 255)
SUBTITLE_COLOR = (16, 185, 129)
TAGLINE_COLOR = (148, 163, 184)
PERSON_COLORS = [
    (251, 191, 36),  # amber-400
    (249, 168, 212),  # pink-300
]
BODY_COLORS = [
    (16, 185, 129),  # emerald-500
    (6, 182, 212),  # cyan-500
]
BOX_COLORS = [
    (245, 158, 11),  # amber-500
]
LEG_COLOR = (30, 41, 59)  # slate-800


def draw_truck(draw, x, y):
    """Draw the truck"""
    # Truck body
    draw.rounded_rectangle([x, y, x + 80, y + 32], radius=3, fill=TRUCK_BODY)

    # Cargo lines
    for i in range(4):
        lx = x + 15 + i * 20
        draw.line([(lx, y + 4), (lx, y + 28)], fill=(255, 255, 255, 77), width=1)

    # Back panel
    draw.rectangle([x + 80, y + 5, x + 82, y + 29], fill=(4, 120, 87))

    # Cabin
    draw.rounded_rectangle([x + 80, y + 8, x + 102, y + 28], radius=2, fill=TRUCK_CAB)

    # Window
    draw.rounded_rectangle(
        [x + 85, y + 11, x + 97, y + 20], radius=1, fill=TRUCK_WINDOW
    )

    # Wheels
    draw.ellipse([x + 18, y + 34, x + 32, y + 48], fill=(30, 41, 59))
    draw.ellipse([x + 21, y + 37, x + 29, y + 45], fill=(100, 116, 139))
    draw.ellipse([x + 68, y + 34, x + 82, y + 48], fill=(30, 41, 59))
    draw.ellipse([x + 71, y + 37, x + 79, y + 45], fill=(100, 116, 139))


def draw_person(draw, x, y, frame, person_idx, carrying_box=False):
    """Draw a walking person"""
    phase = (frame * 0.15 + person_idx * 1.5) % (2 * math.pi)
    walk_cycle = math.sin(phase * 4)
    arm_swing = math.sin(phase * 4) * 4
    bob = abs(math.sin(phase * 4)) * 1.5

    head_color = PERSON_COLORS[person_idx % len(PERSON_COLORS)]
    body_color = BODY_COLORS[person_idx % len(BODY_COLORS)]

    # Head
    head_y = int(y - bob)
    draw.ellipse([int(x - 4), head_y - 5, int(x + 4), head_y + 3], fill=head_color)

    # Body
    body_top = head_y + 3
    body_bottom = body_top + 10
    draw.line([(x, body_top), (x, body_bottom)], fill=body_color, width=2)

    # Arms
    arm_y = body_top + 3
    draw.line(
        [(x, arm_y), (int(x - 6 - arm_swing), int(arm_y + 6))], fill=body_color, width=1
    )
    draw.line(
        [(x, arm_y), (int(x + 6 + arm_swing), int(arm_y + 6))], fill=body_color, width=1
    )

    # Legs
    leg_y = body_bottom
    left_leg_x = int(x - 2 + walk_cycle * 4)
    right_leg_x = int(x + 2 - walk_cycle * 4)
    draw.line([(x, leg_y), (left_leg_x, int(leg_y + 12))], fill=LEG_COLOR, width=2)
    draw.line([(x, leg_y), (right_leg_x, int(leg_y + 12))], fill=LEG_COLOR, width=2)

    # Box
    if carrying_box:
        box_color = BOX_COLORS[person_idx % len(BOX_COLORS)]
        box_y = int(arm_y + 3 - bob * 0.5)
        draw.rounded_rectangle(
            [int(x + 5), box_y, int(x + 13), box_y + 8], radius=1, fill=box_color
        )


def draw_frame(frame):
    """Draw a single frame"""
    img = Image.new("RGBA", (WIDTH, HEIGHT), BG_COLOR)
    draw = ImageDraw.Draw(img)

    # Company Name - Left 2/3
    try:
        font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 38)
        font_medium = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 20)
        font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 10)
    except:
        font_large = ImageFont.load_default()
        font_medium = font_large
        font_small = font_large

    draw.text((8, 8), "Sri Tejaswini", fill=TEXT_COLOR, font=font_large)
    draw.text((8, 48), "Packers & Movers", fill=SUBTITLE_COLOR, font=font_medium)
    draw.text(
        (8, 72),
        "Safe & Reliable Relocation Services",
        fill=TAGLINE_COLOR,
        font=font_small,
    )

    # Right 1/3 - Truck area
    truck_x = 320
    truck_y = 18

    # Ground line
    draw.line([(280, 62), (WIDTH, 62)], fill=GROUND, width=2)

    # Dotted path
    for i in range(0, 50, 8):
        opacity = int(100 + 55 * math.sin((frame * 0.1 + i * 0.05)))
        path_color = (16, 185, 129, opacity)
        draw.ellipse([285 + i, 66, 289 + i, 70], fill=path_color)

    draw_truck(draw, truck_x, truck_y)

    # Person 1 - walking toward truck
    person1_progress = ((frame * 0.8) % NUM_FRAMES) / NUM_FRAMES
    person1_x = int(290 + person1_progress * 40)
    if person1_x < truck_x + 30:
        draw_person(draw, person1_x, 40, frame, 0, carrying_box=True)

    # Person 2 - walking toward truck
    person2_progress = ((frame * 0.6 + 15) % NUM_FRAMES) / NUM_FRAMES
    person2_x = int(300 + person2_progress * 30)
    if person2_x < truck_x + 30:
        draw_person(draw, person2_x, 42, frame, 1, carrying_box=False)

    # Convert to RGB for GIF
    rgb_img = Image.new("RGB", (WIDTH, HEIGHT), BG_COLOR)
    rgb_img.paste(img, mask=img.split()[3] if img.mode == "RGBA" else None)

    return rgb_img


def main():
    frames = []
    for i in range(NUM_FRAMES):
        frame = draw_frame(i)
        frames.append(frame)
        print(f"Generated frame {i + 1}/{NUM_FRAMES}")

    # Save as GIF
    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        duration=FRAME_DURATION,
        loop=0,
        optimize=True,
    )
    print(f"GIF saved to {output_path}")


if __name__ == "__main__":
    main()
