// destructuring 

function handleClick({currentTarget, pageX}: {currentTarget: EventTarget | null; pageX: number}) {
  console.log(currentTarget, pageX)
}

document.documentElement.addEventListener('click', handleClick);