import { Main } from './panel';

export class Ctx {

    view: Main = new Main(this);

    getClassname() {

        return 'panel';

    }

    getContent() {

        return 'foo';

    }

    rendered() {

    }

    removed() {

    }

    render() {

        return this.view.render();

    }

}
