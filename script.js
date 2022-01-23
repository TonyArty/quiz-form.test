if(document.body.contains(document.getElementById('quiz'))){
  const formQuiz = document.getElementById('form_quiz');
  const step = document.getElementsByClassName('step');
  const navPrev = document.querySelector('a.left');
  const navNext = document.querySelector('a.right');

  var currentTab = 0; // Current tab is set to be the first tab (0)
  showTab(currentTab); // Display the crurrent tab

  function showTab(n) {
    // This function will display the specified tab of the form...
    step[n].classList.remove('d-none');

    //fix the Previous/Next buttons:
    if (n == 0) {
      navPrev.setAttribute('disabled', 'disabled');
    } else {
      navPrev.removeAttribute('disabled', 'disabled');
    }
    if (n == 4) {
      navPrev.classList.add('d-none');
      navNext.classList.add('d-none');
    }
  }

  function validateForm() {
    // This function deals with validation of the form inputs (radio, checkbox or range)
    var x = step;
    var x, y, i, valid = true;
    // Get inputs (radio, checkbox or range) of current step
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // Valid step if a input (radio, checkbox or range) is checked...
      if (y[i].checked || y[i].oninput) return valid;
    }
  }

  function nextPrev(n) {
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    step[currentTab].classList.add('d-none');
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }

  // Next step by click radio button
  formQuiz.querySelectorAll('input[type=radio]').forEach(el => {
    el.addEventListener('click', () => {
      nextPrev(1);
    })
  })
  // Shake next button by click checkbox button
  formQuiz.querySelectorAll('input[type=checkbox]').forEach(el => {
    el.addEventListener('click', () => {
      navNext.classList.toggle('shake');
    })
  })
  // Shake next button by oninput range
  formQuiz.querySelector('input[type=range]').oninput = () => {
    navNext.classList.toggle('shake');
  }
}