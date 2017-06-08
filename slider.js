/**
 * Created by Olga on 6/3/17.
 */
document.addEventListener('DOMContentLoaded', function () {
    var sliderContainer = document.getElementsByClassName('slider')[0],
        sliderListWrapper = document.getElementsByClassName('slider-list')[0],
        sliderItems = document.getElementsByClassName('slider-item'),
        sliderItemCount = sliderItems.length,
        btnNext = document.getElementsByClassName('btn-next')[0],
        btnPrev = document.getElementsByClassName('btn-prev')[0];

    // console.log(sliderItemCount);
    sliderItems[0].classList.add('active');

    if(sliderItemCount > 1){
        var controlsWrapper = document.createElement('ul');
            controlsWrapper.classList.add('controls-wrapper', 'clear');
            sliderContainer.appendChild(controlsWrapper);
        var controlsItem;

        for(var i = 0; i < sliderItemCount; i++){
            controlsItem = document.createElement('li');
                controlsItem.classList.add('controls-item');
                controlsItem.setAttribute('rel', 'slide' + i);
                controlsWrapper.appendChild(controlsItem);
        }

        var controlsItemArray = document.getElementsByClassName('controls-item'),
            controlsItemCount = controlsItemArray.length;
            controlsItemArray[0].classList.add('active');

        var clickCount = 0;

        sliding();

        function sliding() {
            next();
            prev();
        }



        function next() {
            btnNext.onclick = function () {
                sliderListWrapper.appendChild(sliderItems[0]);
                sliderListWrapper.style.marginLeft = 0;
                console.log(clickCount);
                clickCount = clickCount++;
                console.log(clickCount);
            }
        }

        function prev() {
            btnPrev.onclick = function () {
                sliderListWrapper.insertBefore(sliderItems[sliderItemCount - 1],sliderItems[0]);
                sliderListWrapper.style.marginLeft = 0;
                clickCount = clickCount + clickCount--;
                console.log(clickCount);
            }
        }


    }

});