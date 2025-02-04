"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertTOC = void 0;
/**
 * Inserts the table of contents at the specified position, relative to the given nodes.
 *
 * @param toc - The table of contents node to insert
 * @param target - The node to insert `toc` in/before/after
 * @param parent - The parent node of `target`. This is used for inserting `toc` before/after `target`
 * @param options - The `position` option determines where `toc` is inserted
 */
function insertTOC(toc, target, parent, { position }) {
    let childIndex = parent.children.indexOf(target);
    switch (position) {
        case "beforebegin":
            parent.children.splice(childIndex, 0, toc);
            break;
        case "afterbegin":
            target.children.unshift(toc);
            break;
        case "beforeend":
            target.children.push(toc);
            break;
        case "afterend":
            parent.children.splice(childIndex + 1, 0, toc);
            break;
        case "replace":
            parent.children = [toc];
            break;
        default:
            throw new Error(`Invalid table-of-contents position: ${position}`);
    }
}
exports.insertTOC = insertTOC;
//# sourceMappingURL=insert-toc.js.map