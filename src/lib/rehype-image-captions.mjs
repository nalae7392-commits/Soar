function isElement(node, tagName) {
	return Boolean(node) && node.type === 'element' && node.tagName === tagName;
}

function wrapImages(node) {
	if (!node.children) return;
	node.children = node.children.map((child) => {
		if (
			isElement(child, 'p') &&
			child.children.length === 1 &&
			isElement(child.children[0], 'img')
		) {
			const img = child.children[0];
			const alt = img.properties?.alt || '';
			const figureChildren = [img];
			if (alt) {
				figureChildren.push({
					type: 'element',
					tagName: 'figcaption',
					properties: {},
					children: [{ type: 'text', value: alt }],
				});
			}
			return {
				type: 'element',
				tagName: 'figure',
				properties: {},
				children: figureChildren,
			};
		}
		wrapImages(child);
		return child;
	});
}

export default function rehypeImageCaptions() {
	return (tree) => {
		wrapImages(tree);
	};
}
