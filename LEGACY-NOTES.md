
# Lab 05 - Legacy jQuery Notes

## 1. Native JavaScript Equivalents

| jQuery Code | Native JavaScript Equivalent |
|---|---|
| $(document).ready(fn) | document.addEventListener("DOMContentLoaded", fn) |
| $("#name").val() | document.querySelector("#name").value |
| .after(html) | element.insertAdjacentHTML("afterend", html) |
| $(".error").remove() | document.querySelectorAll(".error").forEach(el => el.remove()) |
| .text("...") | element.textContent = "..." |
| .hide().fadeIn(400) | Use CSS display and transition properties |
| $form[0].reset() | form.reset() |

## 2. Three Legacy Code Smells

1. **Using var:** Modern JavaScript uses const and let for better variable scope and safer code.
2. **Using $.trim():** Modern JavaScript provides the built-in trim() method.
3. **Building HTML with strings:** Modern JavaScript can create elements safely using document.createElement() and textContent.

## 3. Conclusion

jQuery was created to simplify DOM manipulation and handle browser differences. Modern browsers now provide native methods such as querySelector(), addEventListener(), classList, fetch(), and classList.toggle(). Legacy jQuery is still used because many existing websites and applications depend on it.
