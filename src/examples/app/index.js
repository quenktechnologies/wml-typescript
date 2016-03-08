import widget from './widget.wml';
import WMLTree from '../../core/WMLTree';

(new WMLTree(widget())).render(document.getElementById('main'));
