(function(){
    function getRandomInt (min, max) {
        min = Math.floor(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let firstDice={
        number:getRandomInt(1, 6),
        roll: () => {
            this.number = getRandomInt(1, 6);
            return this.number;
        }
    };

    let scundDice={
        number:getRandomInt(1, 6),
        roll: () => {
            this.number = getRandomInt(1, 6);
            return this.number;
        }
    };

    function imagesToPrint (img1, img2) {
        let firstImag = document.querySelector('#first-dice');
        let scundImg = document.querySelector('#scund-dice');
        firstImag.style['background-image'] = `url(images/inverted-dice-${img1}.svg)`;
        scundImg.style['background-image'] = `url(images/inverted-dice-${img2}.svg)`;
    }

    let button = document.querySelector('#button-roll');
    button.addEventListener('click', event => {
        event.preventDefault();
        let firstroll = firstDice.roll();
        let scundroll = scundDice.roll();

        imagesToPrint(firstroll, scundroll);
    });


    imagesToPrint(firstDice.number, scundDice.number);


})();
