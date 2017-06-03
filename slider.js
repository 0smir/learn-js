/**
 * Created by Olga on 6/3/17.
 */
document.addEventListener('DOMContentLoaded', function () {
    var sliderContainer = document.getElementsByClassName('slider')[0],
        sliderListWrapper = document.getElementsByClassName('slider-list')[0],
        sliderItems = document.getElementsByClassName('slider-item'),
        sliderItemCount = sliderItems.length;


    console.log(sliderItemCount);
    if(sliderItemCount > 1){
        var controlsWrapper = document.createElement('ul');
            controlsWrapper.classList.add('controls-wrapper', 'clear');
        for(var i = 0; i < sliderItemCount; i++){
            var controlsItem = document.createElement('li');
                controlsItem.classList.add('controls-item');
                controlsWrapper.appendChild(controlsItem);
        }

        sliderContainer.appendChild(controlsWrapper);

    }

});