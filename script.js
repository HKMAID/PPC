let scoreJoueur = 0;
let scoreIA = 0;
const score = document.getElementById('score');
const result = document.getElementById('res');
const btns = document.querySelectorAll('button:not(#nv)');
const nvBtn = document.getElementById('nv');

function updateScore() {
    score.textContent = `Score: Joueur ${scoreJoueur} - Ordinateur ${scoreIA}`;
}

btns.forEach(button => {
    button.addEventListener('click', () => {
        btns.forEach(btn => {
            btn.classList.remove('selected');
            btn.disabled = true;
        });
        button.classList.add('selected');

        const choixJ = button.id;
        const choixIA = ['Pierre', 'Papier', 'Ciseaux'];
        let x = Math.floor(Math.random() * 3);
        const choixOrdi = choixIA[x];

        if (choixJ === choixOrdi) {
            result.textContent = `Égalité! Vous avez choisi ${choixJ} et l'ordinateur a choisi ${choixOrdi}.`;
        } else if (
            (choixJ === 'Pierre' && choixOrdi === 'Ciseaux') ||
            (choixJ === 'Papier' && choixOrdi === 'Pierre') ||
            (choixJ === 'Ciseaux' && choixOrdi === 'Papier')
        ) {
            result.textContent = `Vous avez gagné! Vous avez choisi ${choixJ} et l'ordinateur a choisi ${choixOrdi}.`;
            scoreJoueur++;
            updateScore();
        } else {
            result.textContent = `Vous avez perdu! Vous avez choisi ${choixJ} et l'ordinateur a choisi ${choixOrdi}.`;
            scoreIA++;
            updateScore();
        }
    });
});

nvBtn.addEventListener('click', () => {
    result.textContent = '';
    btns.forEach(btn => {
        btn.classList.remove('selected');
        btn.disabled = false;
    });
});