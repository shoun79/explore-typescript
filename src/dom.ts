
const submitBtn = document.getElementById('submit-btn');
const input = document.getElementById('input') as HTMLInputElement;

const handleSubmit = (e: MouseEvent) => {
    console.log('clicked', input?.value);
    const target = e.target as HTMLElement;
    const p = document.createElement('p');
    p.innerText = input?.value;

    target?.parentNode?.appendChild(p)
}

submitBtn?.addEventListener('click', handleSubmit)