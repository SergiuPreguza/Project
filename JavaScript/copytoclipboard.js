const liElements = document.getElementsByClassName("checkbox");
for (let li of liElements) {
	li.addEventListener("click", function (e) {
    if (e.target == this ) {
      let text = e.target.innerHTML;
      navigator.clipboard.writeText(text);
      const credits = li.querySelector('.copy-text');
      credits.textContent = 'Copied!';
      setTimeout(() => {
        credits.textContent = 'Copy';
      }, 1000);
    }
  });
};