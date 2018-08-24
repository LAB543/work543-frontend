/*eslint-disable*/

export function capitalize(value) {
  return value.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
}

// Sidebar navigation
export var _navigationSidebar = function () {
  // Define default class names and options
  var navClass = 'nav-sidebar',
    navItemClass = 'nav-item',
    navNoItemClass = 'nav-no-submenu',
    navItemOpenClass = 'nav-item-open',
    navLinkClass = 'nav-link',
    navSubmenuClass = 'nav-group-sub',
    navSlidingSpeed = 250;

  // Configure collapsible functionality
  $('.' + navClass).each(function () {
    var $navSidebarMini = $('.sidebar-xs').not('.sidebar-mobile-main').find('.sidebar-main .' + navClass).children('.' + navItemClass);

    $(this).find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).not('.disabled').on('click', function (e) {
      e.preventDefault();

      // Simplify stuff
      var $target = $(this);

      // Collapsible
      if ($target.parent('.' + navItemClass).hasClass(navItemOpenClass)) {
        $target.parent('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
      } else {
        $target.parent('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed);
      }

      // Accordion
      if ($target.parents('.' + navClass).data('nav-type') === 'accordion') {
        $target.parent('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
        $target.parent('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navLinkClass + '.active' + ')').find('.' + navLinkClass).removeClass('active');
      }
    });

    $(this).find('.' + navNoItemClass).on('click', function () {
      var $target = $(this);

      if (!$(this).find('.' + navLinkClass).hasClass('active')) {
        $(this).find('.' + navLinkClass).addClass('active');

        // Collapsible
        if ($target.parent().find(navItemOpenClass)) {
          $target.parent('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
        } else {
          $target.parent('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed);
        }

        // Accordion
        if ($target.parent().data('nav-type') === 'accordion') {
          $target.parent().find('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
        }
      }
    });
  });



  // Disable click in disabled navigation items
  $(document).on('click', '.' + navClass + ' .disabled', function (e) {
    e.preventDefault();
  });

  // Scrollspy navigation
  $('.nav-scrollspy').find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).off('click');
};

// Collapse card
export var _cardActionCollapse = function () {
  var $cardCollapsedClass = $('.card-collapsed');

  // Hide if collapsed by default
  $cardCollapsedClass.children('.card-header').nextAll().hide();

  // Rotate icon if collapsed by default
  $cardCollapsedClass.find('[data-action=collapse]').addClass('rotate-180');

  // Collapse on click
  $('.card [data-action=collapse]:not(.disabled)').on('click', function (e) {
    var $target = $(this),
      slidingSpeed = 150;

    e.preventDefault();
    $target.parents('.card').toggleClass('card-collapsed');
    $target.toggleClass('rotate-180');
    $target.closest('.card').children('.card-header').nextAll().slideToggle(slidingSpeed);
  });
};

// Remove card
export var _cardActionRemove = function () {
  $('.card [data-action=remove]').on('click', function (e) {
    e.preventDefault();
    var $target = $(this),
      slidingSpeed = 150;

    // If not disabled
    if (!$target.hasClass('disabled')) {
      $target.closest('.card').slideUp({
        duration: slidingSpeed,
        start: function () {
          $target.addClass('d-block');
        },
        complete: function () {
          $target.remove();
        }
      });
    }
  });
};

// Reload card (uses BlockUI extension)
export var _cardActionReload = function () {
  $('.card [data-action=reload]:not(.disabled)').on('click', function (e) {
    console.log('onClick');
    e.preventDefault();
    var $target = $(this),
      block = $target.closest('.card');

    // Block card
    $(block).block({
      message: '<i class="icon-spinner2 spinner"></i>',
      overlayCSS: {
        backgroundColor: '#fff',
        opacity: 0.8,
        cursor: 'wait',
        'box-shadow': '0 0 0 1px #ddd'
      },
      css: {
        border: 0,
        padding: 0,
        backgroundColor: 'none'
      }
    });

    // For demo purposes
    window.setTimeout(function () {
      $(block).unblock();
    }, 2000);
  });
};


