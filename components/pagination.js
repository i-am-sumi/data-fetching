export const createPagination = (route, callback) => {
  let skip = 0;

  const nextButton = document.createElement('button');
  nextButton.classList.add('btn', 'btn-primary', 'ms-4');
  nextButton.innerText = '>>';

  nextButton.addEventListener('click', () => {
    skip += 6;
    fetch(`https://dummyjson.com/${route}?limit=6&skip=${skip}`)
      .then((result) => result.json())
      .then((value) => {
        callback(value);
      });
  });

  const previousButton = document.createElement('button');
  previousButton.classList.add('btn', 'btn-primary');
  previousButton.innerText = '<<';

  previousButton.addEventListener('click', () => {
    if (skip > 0) {
      skip -= 6;
    }

    fetch(`https://dummyjson.com/${route}?limit=6&skip=${skip}`)
      .then((result) => result.json())
      .then((value) => {
        callback(value);
      });
  });

  const nextPreviousWrapper = document.createElement('div');
  nextPreviousWrapper.classList.add(
    'next-previous',
    'd-flex',
    'justify-content-center',
    'my-4'
  );

  nextPreviousWrapper.appendChild(previousButton);
  nextPreviousWrapper.appendChild(nextButton);

  document.querySelector('#app').appendChild(nextPreviousWrapper);
};
