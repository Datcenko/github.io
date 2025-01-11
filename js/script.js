(function() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 16,
        navigation: {
          nextEl: '.gatalog-gallery .btn-next',
          prevEl: '.gatalog-gallery .btn-prev',
        },
      });

    const rangeInit = () => {
        let range = document.querySelector(".range");
        if (!range) return;
        
        let minValue = range.querySelector(".min-value");
        let maxValue = range.querySelector(".max-value");
        const rangeFill = range.querySelector(".range-fill");
        
        function validateRange() {
            let minPrice = parseInt(inputElements[0].value);
            let maxPrice = parseInt(inputElements[1].value);
        
            if (minPrice > maxPrice) {
                let tempValue = maxPrice;
                maxPrice = minPrice;
                minPrice = tempValue;
            }
        
            const minPercentage = ((minPrice - 0) / 70) * 100;
            const maxPercentage = ((maxPrice - 0) / 70) * 100;
            rangeFill.style.left = minPercentage + "%";
            rangeFill.style.width = maxPercentage - minPercentage + "%";
        
            minValue.innerHTML = "$" + minPrice;
            maxValue.innerHTML = "$" + maxPrice;
        }
        
        const inputElements = range.querySelectorAll("input[type='range']");
        
        inputElements.forEach((element) => {
            element.addEventListener("input", validateRange);
        });
        
        validateRange();
    }

    rangeInit();
    
}());

















