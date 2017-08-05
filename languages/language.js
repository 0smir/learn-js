(function () {
    var currentLanguageBlock = document.querySelector('.language-settings__current-language'),
        currentLanguageLink = document.querySelector('.language-settings__current-language-link'),
        languageDropDown = document.querySelector('.language-settings__language-dropdown'),
        languageLinkList = document.querySelectorAll('.language-settings__language-link');

    currentLanguageBlock.onclick = showDropdown;

    for(var i = 0; i < languageLinkList.length; i++){
        languageLinkList[i].addEventListener('click', stopDefaultAction, false);

    }

    function showDropdown() {
        languageDropDown.classList.add('show');
        currentLanguageBlock.classList.remove('show');
    }

    function stopDefaultAction(e) {
        e.preventDefault();
    }


    function hideDropdown(e) {
        var target = e.target,
            match = true;
        while(target){
            if(target.classList && (target.classList.contains('language-settings__current-language') || target.classList.contains('language-settings__language-dropdown'))){
                match = false
            }

            target = target.parentNode;
        }
        if(match){
            languageDropDown.classList.remove('show');
            currentLanguageBlock.classList.add('show');
        }
    }

    function chooseLanguage(e) {
        var target = e.target;

        while(target != this){

            if(target.classList.contains('language-settings__language-link')){
                currentLanguageBlock.appendChild(target);
                languageDropDown.appendChild(currentLanguageLink);
                match = true;
                addNewClass();
                return;
            }
            target = target.parentNode;
        }
    }
    
    function addNewClass() {
        var currentNewLink = currentLanguageBlock.getElementsByClassName('language-settings__language-link')[0],
            dropdownNewLink = languageDropDown.querySelector('.language-settings__language-link:last-of-type');
        //add/remove old classes for new currentLink
        currentNewLink.classList.add('language-settings__current-language-link');
        currentNewLink.classList.remove('language-settings__language-dropdown-link');
        //add/remove old classes dor new dropdownLink
        dropdownNewLink.classList.add('language-settings__language-dropdown-link');
        dropdownNewLink.classList.remove('language-settings__current-language-link');
        
        languageDropDown.classList.remove('show');
        currentLanguageBlock.classList.add('show');

    }




    languageDropDown.addEventListener('click', chooseLanguage);
    document.addEventListener('click', hideDropdown);
})();