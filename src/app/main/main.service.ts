import { Avatar, WindowOption } from './main.model';

export class MainService {
    public getWindowOption(): WindowOption[] {
        return [{ name: "Nav bar", value: true } as WindowOption,
        { name: "Share Points", value: true } as WindowOption,
        { name: "Tags", value: true } as WindowOption,
        { name: "Name", value: true } as WindowOption,
        { name: "Description", value: true } as WindowOption];
    }
    public getMainAvatarList(): Avatar[] {

        let avatarNamber: number = 30;
        let avatarList: Avatar[] = [];
        for (var i = 0; i != avatarNamber; i++) {
            avatarList.push(this.pancakeAvatar());
            avatarList.push(this.pcPartAvatar());
            avatarList.push(this.houseAvatar());
            avatarList.push(this.dogsAvatar());
            avatarList.push(this.catsAvatar());
        }
        return avatarList;
    }
    private randSharePoint(): number {
        const maxNumber = 3000;
        return Math.floor(Math.random() * Math.floor(maxNumber));
    }

    private pancakeAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'Pancake';
        avatar.authorId = '1234';
        avatar.folderName = 'Placuszki';
        avatar.tags = this.randomTags();
        avatar.publishDate = new Date(Date.now());
        avatar.imagesUrl = this.randomImage();
        avatar.sharePoint = this.randSharePoint();
        avatar.shortDescription = 'Pancake is a good diner.'
        return avatar;
    }
    private houseAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'House';
        avatar.authorId = '2222';
        avatar.folderName = 'Best homes in the north';
        avatar.tags = this.randomTags();
        avatar.publishDate = new Date(Date.now());
        avatar.imagesUrl = this.randomImage();
        avatar.sharePoint = this.randSharePoint();
        avatar.shortDescription = 'An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. '
        return avatar;
    }
    private dogsAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'Dogs';
        avatar.authorId = '3333';
        avatar.folderName = 'Faithful dogs';
        avatar.tags = this.randomTags();
        avatar.publishDate = new Date(Date.now());
        avatar.imagesUrl = this.randomImage();
        avatar.sharePoint = this.randSharePoint();
        avatar.shortDescription = 'Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do. Few hills tears are weeks saw. Partiality insensible celebrated is in.'
        return avatar;
    }
    private catsAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'Cats';
        avatar.authorId = '4444';
        avatar.folderName = 'Cats are the best';
        avatar.tags = this.randomTags();
        avatar.publishDate = new Date(Date.now());
        avatar.imagesUrl = this.randomImage();
        avatar.sharePoint = this.randSharePoint();
        avatar.shortDescription = 'cats, are better than dogs.'
        return avatar;
    }
    private pcPartAvatar(): Avatar {
        let avatar = new Avatar();
        avatar.authorName = 'PcPart';
        avatar.authorId = '5555';
        avatar.folderName = 'Pc parts';
        avatar.tags = this.randomTags();
        avatar.publishDate = new Date(Date.now());
        avatar.imagesUrl = this.randomImage();
        avatar.sharePoint = this.randSharePoint();
        avatar.shortDescription = 'Horses seeing at played plenty nature to expect we. Young say led stood hills own thing get.'
        return avatar;
    }

    private randomTags(): string[] {
        let tags: string[] = ['pc', 'hdd', 'ssd', 'drive', 'parts', 'Cats', 'Cat', 'Best', 'Dogs', 'Pet', 'Faithful', 'food', 'pancake', 'dinner'];

        return this.randomUniqueElementFromList(5, tags, true);
    }

    private randomUniqueElementFromList(uniqueElementNumber: number, elements: string[], couldBeEmpty: boolean): string[] {
        let tagNumber = Math.floor(Math.random() * Math.floor(uniqueElementNumber));
        if (tagNumber == 0 && couldBeEmpty == false) {
            tagNumber = 1;
        }
        let finalTags: string[] = [];
        for (let i = 0; i < tagNumber; i++) {
            let random = Math.floor(Math.random() * Math.floor(elements.length));
            if (finalTags.find((tag) => { return tag == elements[random] })) {
                i -= 1;
            } else {
                finalTags.push(elements[random]);
            }
        }
        return finalTags;
    }

    private randomImage(): string[] {
        let randomPicture: string[] = [];
        const imageInTempNumber: number = 9;
        for (let i = 0; i < imageInTempNumber; i++) {
            randomPicture.push('/assets/temp/' + i + '.jpg');
        }
        return this.randomUniqueElementFromList(3, randomPicture, false);
    }
    public navBarIsVisible(): boolean {
        let windowOptions = this.getWindowOption();
        let navBarOption = windowOptions.find((windowOption) => { return windowOption.name == "Nav bar" });
        return navBarOption.value;
    }
}

