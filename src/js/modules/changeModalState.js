import checkNumInputs from './checkNumInputs';

function changeModalState(state) {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActiontoElems(event, elem, prop) {
    elem.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = index;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              index === 0
                ? (state[prop] = 'Холодное')
                : (state[prop] = 'Теплое');
              elem.forEach((box, j) => {
                box.checked = true;
                if (index == j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;
        }

        console.log(state);
      });
    });
  }

  bindActiontoElems('click', windowForm, 'form');
  bindActiontoElems('input', windowWidth, 'width');
  bindActiontoElems('input', windowHeight, 'height');
  bindActiontoElems('change', windowType, 'type');
  bindActiontoElems('change', windowProfile, 'profile');
}

export default changeModalState;
