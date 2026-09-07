import { DragController } from './DragController.js';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.json('level_01_data', 'data/level_01.json');
        this.load.image('bg_cabin_broken', 'assets/bg_cabin_broken.png');
        this.load.image('char_freezing', 'assets/char_freezing.png');
        this.load.image('char_happy', 'assets/char_happy.png');
        // Item icons dynamically loaded from level JSON
    }

    create() {
        const levelData = this.cache.json.get('level_01_data');
        this.add.image(540, 960, levelData.initial_background);

        this.dropzones = this.physics.add.staticGroup();
        this.items = this.add.group();

        this.setupDropzones(levelData.hotspots);
        this.setupItemTray(levelData.available_items);

        this.dragController = new DragController(this, this.items, this.dropzones);
    }

    setupDropzones(hotspots) {
        hotspots.forEach(hp => {
            const zone = this.add.zone(hp.x, hp.y, hp.width, hp.height).setRectangleDropZone(hp.width, hp.height);
            zone.setData('requiredItem', hp.required_item_id);
            zone.setData('stepOrder', hp.order);
            
            zone.on('resolved', () => {
                this.events.emit('puzzle_step_completed', hp);
            });
            this.dropzones.add(zone);
        });
    }

    setupItemTray(itemsData) {
        const startX = 140;
        const spacing = 160;
        const trayY = 1750;

        itemsData.forEach((item, index) => {
            const itemSprite = this.add.sprite(startX + (index * spacing), trayY, item.icon_key)
                .setInteractive({ draggable: true });
            itemSprite.setData('itemId', item.id);
            this.items.add(itemSprite);
        });
    }
}
