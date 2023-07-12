const accordionLabel = document.querySelector('.accordion-label');
const accordionLabelPhone = document.querySelector('.accordion-label_phone');
const dropdown = document.querySelector('.dropdown');
const dropdownPhone = document.querySelector('.dropdown_phone');
const activeBorder = document.querySelector('.active_border');
const orderContainer = document.querySelector('.order_container');
const dropdownContainer = document.querySelector('.dropdown_phone');
const backPersonalOfficeContainer = document.querySelector('.back_personal_office_container');
const mainSectionHeader = document.querySelector('.main_section_header');
const accordionPhone = document.querySelector('.accordion_phone');
const header = document.querySelector('.header_section');
const phone = document.querySelector('.phone');
const menuSectionContainer = document.querySelector('.delete_phone');
const menuSection = document.querySelector('.menu_section');
const orderListPhone = document.querySelector('.orders_list_phone');
const backPersonalOfficeActive = document.querySelector('.back_personal_office_active');
const blurContent = document.querySelector('.main_section');
const blur = document.querySelector('.main_section_container');

let shouldScroll = true;
const mediaQuery2 = window.matchMedia('(max-width: 767px)');
const mediaQuery3 = window.matchMedia('(min-width: 768px)');
const mediaQuery4 = window.matchMedia('(max-width: 1176px)');
const mediaQuery5 = window.matchMedia('(min-width: 1177px)');
const checkbox = document.getElementById('tab1');
menuSection.style.minHeight = '661px';
menuSection.style.transform = 'translateX(0%)';
menuSection.style.display = 'flex';



// show dpordown
accordionLabel.addEventListener('click', function() {
  const isVisible = dropdown.style.display === 'block';

  if (isVisible) {
    dropdown.style.opacity = '0';
    menuSection.style.transform = 'translateX(0%)';
    blur.classList.remove('blur_background');
    setTimeout(function() {
      dropdown.style.display = 'none';
      activeBorder.style.borderRadius = '8px';
      dropdown.style.borderRadius = '0px';
      menuSection.style.minHeight = '';
    }, 200);
  } else {
    dropdown.style.display = 'block';
    menuSection.style.transform = 'translateX(0%)';
    setTimeout(function() {
      dropdown.style.opacity = '1';
      activeBorder.style.border = '1px solid rgb(217, 239, 212)';
      activeBorder.style.boxShadow = '0px 1px 6px 0px rgba(0, 0, 0, 0.20)';
      orderContainer.style.boxShadow = 'none';
      activeBorder.style.borderRadius = '8px';
      dropdown.style.borderRadius = '8px';
      menuSection.style.minHeight = '966px';
      blur.classList.remove('blur_background');
    }, 10);
  }
});



backPersonalOfficeContainer.addEventListener('click', function() {
    menuSection.style.display = 'flex';
    blurContent.style.width = '100%';
    menuSection.style.transform = 'translateX(0%)';
    menuSection.style.transition = '0.5s ease';
    blur.classList.add('blur_background');
});


menuSectionContainer.addEventListener('click', function() {
  if (menuSection.style.display !== 'flex') {
    menuSection.style.display = 'flex'
    menuSection.style.transition = '0.5s ease';
    blur.classList.remove('blur_background');
  } else {
    menuSection.style.transform = 'translateX(-100%)';
    blur.classList.remove('blur_background');
    blurContent.style.width = '100%';
    menuSection.style.transition = '0.5s ease';
  };
});



function handleScreenChange1(e) {
  if (e.matches) {
    activeBorder.style.display = 'none'
    blurContent.style.width = '100%';
    dropdown.style.display = 'none';
    checkbox.checked = false;
    orderListPhone.style.display = 'flex';
    mainSectionHeader.classList.remove('hidden');
    phone.style.marginBottom = '24px';
    accordionPhone.classList.remove('hidden');
    backPersonalOfficeActive.classList.remove('visible');
    backPersonalOfficeActive.classList.add('hidden');
    header.classList.add('visible');
    blur.classList.remove('blur_background');
    backPersonalOfficeContainer.classList.remove('hidden');
    menuSection.style.minHeight = '581px';
    menuSection.style.transform = 'translateX(-100%)';

    accordionPhone.addEventListener('click', function () {
      header.classList.remove('visible');
      dropdownPhone.style.opacity = '1';
      dropdownPhone.style.height = 'auto';
      accordionPhone.classList.remove('visible');
      accordionPhone.classList.add('hidden');
      backPersonalOfficeContainer.classList.remove('visible');
      backPersonalOfficeActive.classList.add('visible');
      menuSection.style.minHeight = '247.5%';
      menuSection.style.transform = 'translateX(-100%)'
      blur.classList.remove('blur_background');
      dropdownPhone.style.transition = 'opacity 0.3s ease, height 0.3s ease';
      accordionPhone.style.transition = 'opacity 0.3s ease';
      backPersonalOfficeActive.style.transition = 'opacity 0.3s ease';
      dropdownPhone.style.opacity = '0';
      dropdownPhone.style.height = '0';
      accordionPhone.style.opacity = '0';
      backPersonalOfficeActive.style.opacity = '0';
    
      setTimeout(function () {
        dropdownPhone.style.opacity = '1';
        dropdownPhone.style.height = 'auto';
        accordionPhone.style.opacity = '1';
        backPersonalOfficeActive.style.opacity = '1';
      }, 0);
    });

    // show dropdown phone
    accordionLabelPhone.addEventListener('click', function () {
      const isVisiblePhone = dropdownPhone.style.display === 'block';
      backPersonalOfficeActive.classList.add('visible');

      if (!isVisiblePhone) {
        setTimeout(function () {
          dropdownPhone.style.display = 'block';
          dropdownContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
        orderListPhone.style.display = 'none';
        phone.style.margin = '0px';
        backPersonalOfficeContainer.classList.add('hidden');
        mainSectionHeader.classList.add('hidden');
        accordionPhone.classList.add('hidden');
        header.classList.add('hidden');
        header.classList.remove('visible');
        backPersonalOfficeActive.classList.remove('hidden');
        backPersonalOfficeActive.classList.add('visible');
        dropdownPhone.style.opacity = '1';
        setTimeout(function () {
          dropdownPhone.style.display = 'block';
        }, 200);
      }
      shouldScroll = !shouldScroll;
    });

    // back to order list
    backPersonalOfficeActive.addEventListener('click', function () {
      backPersonalOfficeContainer.classList.remove('hidden');
      mainSectionHeader.classList.remove('hidden');
      accordionPhone.classList.remove('hidden');
      header.classList.remove('hidden');
      backPersonalOfficeActive.classList.remove('visible');
      backPersonalOfficeActive.classList.add('hidden');
      dropdownPhone.style.display = 'none';
      orderListPhone.style.display = 'flex';
      phone.style.boxShadow = '0px 1px 6px 0px rgba(0, 0, 0, 0.20)';
      phone.style.marginBottom = '24px';
      shouldScroll = true;
      menuSection.style.minHeight = '581px';
      menuSection.style.transform = 'translateX(-100%)'
    });
  }
};
mediaQuery2.addEventListener('change', handleScreenChange1);
handleScreenChange1(mediaQuery2);
  


function handleScreenChange3(e) {
  if (e.matches) {
    dropdown.style.display = 'none';
    dropdownPhone.style.display = 'none';
    checkbox.checked = false;
    activeBorder.style.display = 'block'

  } else {
    dropdown.style.display = 'block';
    checkbox.checked = true;
  }
};
mediaQuery3.addEventListener('change', handleScreenChange3);
handleScreenChange3(mediaQuery3);




function handleScreenChange4(mediaQuery) {
  if (mediaQuery.matches) {
    accordionLabel.addEventListener('click', function() {
      menuSection.style.transform = 'translateX(-100%)';
    })
    blur.classList.remove('blur_background');
    menuSection.style.transform = 'translateX(-100%)';
  }
};
mediaQuery4.addEventListener('change', handleScreenChange4);
handleScreenChange4(mediaQuery4);




function handleScreenChange5(mediaQuery) {
  if (mediaQuery.matches) {
    menuSection.style.transform = 'translateX(0%)';
    menuSection.style.transition = 'none';
    accordionLabel.addEventListener('click', function() {
      menuSection.style.transform = 'translateX(0%)';
    })
    menuSection.style.display = 'flex';
    blurContent.style.width = 'calc(100% - 385px)';
  } else {
    blurContent.style.width = '100%';
  }
};
mediaQuery5.addEventListener('change', handleScreenChange5);
handleScreenChange5(mediaQuery5);
