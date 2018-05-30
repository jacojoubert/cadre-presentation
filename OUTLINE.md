### Goals
Create a UI framework that allows you to build enterprise grade CRUD apps without having to write HTML or CSS. Like Material design, but for the web.

### Defining the problem
- Components are more complex than you would first expect
  - Theming and customization is the most difficult requirement. Components needs to fit into their environment and be flexible enough to adapt to different use cases.
  - Aria compliance and i18n support. Serious apps need both. Customization of any value gets displayed must be possible (ie. date formatting)
  - Need huge library of components.
  - Maintainable. Layout code from existing frameworks is not easily understood and complex layouts require code structure that is not accessible.
  - Also applies to customizations done to components. If you are tweaking css you can't be required to fix it every time the html changes.

### The approach
- Theming
  UI libraries will always fall short of proving everything, so the big question is how do you allow for deep customization that doesn't break with every version.

  - Blueprints
    - Parent component takes care of all the behaviour and allows blueprint to focus on the presentation
    - Parent only has one element (with few exceptions like modal)

  - Variant
    - Every component defines a mixin.
    - Use it to easily create slight variations of the same thing.

- [ui-button example]
  - So how does this work in practice. Take the most simplest of components: the humble button
  - Base button gives you:
    - Different sizes
    - Supports auto, fixed, and full button widths
    - Many different states. User must be able to manually activate them (ie. if a select is open the button should be active)
    - Ability to use it as a link for ARIA support
  - Variant gives you
    - How the button looks
    - Support icons and properly space everything out
  - Blueprints gives you
    - Custom layouts for general button vs. select button

- Layouts
  - Bootstrap/Ember paper is not the way to go
  - The markup is messy, hard to understand by looking at it
  - You are basically writing css inline at this point
  - Layout is best expressed in css using grids
  - [ui-section example]
    - Predefined areas makes it very easy to understand the code
    - Removing elements allows it to collapse in on itself smartly
    - Encodes the design language in code
    - Title, description, etc. automatically takes care of Aria requirements
    - Modifying the grid to work with different screen sizes is also very simple
    - Important for ARIA because the order of the content makes sense. Separates logical order from display order.
  - ember-paper comparison
    - More flexible in some ways, but you are basically writing css inline at this point

### In action
- [ui-form]
  - Form component auto ties inputs together
  - Uses a custom ui-layout blueprint to separate sections
  - Easy to specify validation rules and override the error message
  - Server errors goes on the button you clicked
  - Error messages gets announced as soon as they show

- [ui-select-date]
  - Everything is keyboard navigable using both tab and arrow keys
  - Enters opens it up, esc closes it
  - Is actually localized already using moment
  - Once components are accessible they are more pleasant to use for everybody

- [ui-modal]
  - Title and description has aria support
  - Auto set focus to the first element
  - Tab wraps around
  - You can also programmatically show a modal via the cadre service

- [ui-popover]
  - Utility component that makes building new components easier

- Show other components available
