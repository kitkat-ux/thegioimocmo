# TECHNICAL SPECIFICATION & SOURCE CODE SKELETON

## 1. Tech Stack
- **Framework:** Phaser 3 (HTML5 / WebGL)
- **Language:** JavaScript (ES6+) / TypeScript
- **Target Resolution:** 1080 x 1920 (Responsive Scaled Fit)

---

## 2. Core Drag-and-Drop Controller (`DragController.js`)

```javascript
export class DragController {
    constructor(scene, itemGroup, dropzoneGroup) {
        this.scene = scene;
        this.items = itemGroup;
        this.dropzones = dropzoneGroup;
        this.init();
    }

    init() {
        this.scene.input.on('dragstart', (pointer, gameObject) => {
            gameObject.setDepth(100);
            gameObject.setScale(1.1);
            gameObject.startX = gameObject.x;
            gameObject.startY = gameObject.y;
        });

        this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.scene.input.on('dragend', (pointer, gameObject) => {
            gameObject.setScale(1.0);
            let droppedSuccessfully = false;

            this.dropzones.getChildren().forEach(zone => {
                const distance = Phaser.Math.Distance.Between(
                    gameObject.x, gameObject.y, zone.x, zone.y
                );

                if (distance < zone.input.hitArea.radius || zone.getBounds().contains(gameObject.x, gameObject.y)) {
                    if (zone.getData('requiredItem') === gameObject.getData('itemId')) {
                        this.handleSuccess(gameObject, zone);
                        droppedSuccessfully = true;
                    }
                }
            });

            if (!droppedSuccessfully) {
                this.handleFailure(gameObject);
            }
        });
    }

    handleSuccess(item, zone) {
        item.disableInteractive();
        item.setVisible(false);
        zone.emit('resolved', { itemUsed: item.getData('itemId') });
    }

    handleFailure(item) {
        this.scene.tweens.add({
            targets: item,
            x: item.startX,
            y: item.startY,
            duration: 300,
            ease: 'Back.easeOut'
        });
    }
}
