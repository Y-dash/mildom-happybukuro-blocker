const COMMON_CLASS_NAME: string = 'ts--mildom-happybukuro-blocker--checked';
const HAPPYBUKURO_MESSAGE: string = 'ハッピー袋ありがとう！';

let rootElement: HTMLElement | null = document.getElementById('root');

let mutationObserver: MutationObserver = new MutationObserver(() => {
	document.querySelectorAll(`div.message-list > div:not(.${COMMON_CLASS_NAME})`).forEach((element: Element) =>  {
		element.classList.add(COMMON_CLASS_NAME);

		let comment = element.querySelector('.sc-173ztwo-0')?.textContent;
		
		if (comment && comment.indexOf(HAPPYBUKURO_MESSAGE) !== -1) {
			element.setAttribute('style', 'display: none;');
		}
	});
});

if (rootElement) {
	mutationObserver.observe(rootElement, {
		childList: true,
		subtree: true
	});
}