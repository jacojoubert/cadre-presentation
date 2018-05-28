### Goals
Create a UI framework that allows you to build enterprise grade CRUD apps without having to write HTML or CSS. Like Material design, but for the web.

### Defining the problem
- Components are more complex than you would first expect
  - Theming and customization is the most difficult requirement. Components needs to fit into their environment and be flexible enough to adapt to different use cases.
  - Many different states (active, hover, focus, disabled, loading)
  - Aria compliance and i18n support. Serious apps need both. Customization of any value gets displayed must be possible (ie. date formatting)
  - Component interactions can be complex (forms and errors)
  - [ui-button example]
    - Different sizes
    - Different looks
    - Many different states. User must be able to manually activate them (ie. if a select is open the button should be active)
    - Must support icons and properly space everything out
    - Must support auto, fixed, and full button widths
    - Markup must be contextual for aria support. Button vs a tag
    - Need custom layouts for general button vs. select button

### The approach
- Theming
  UI libraries will always fall short of proving everything, so the big question is how do you allow for deep customization that doesn't break with every version.

  - Variant
    - Every component defines a mixin.
    - Use it to easily create slight variations of the same thing.

  - Blueprints
    - Parent component takes care of all the behaviour and allows blueprint to focus on the presentation
    - Parent only has one element (with few exceptions like modal)

- Layouts
  - Bootstrap/Ember paper is not the way to go
  - The markup is messy, hard to understand by looking at it
  - Layout is best expressed in css using grids
  - [ui-section example]
    - Predefined areas makes it very easy to understand the code
    - Title, description, etc. automatically takes care of Aria requirements
    - Modifying the grid to work with different screen sizes is also very simple
    - Important for ARIA because the order of the content makes sense. Separates logical order from display order.

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

- [ui-modal]
  - Title and description has aria support
  - Auto set focus to the first element
  - Tab wraps around
  - You can also programmatically show a modal, called a [ui-prompt]
  - Can nest them has many times as you want

- [ui-popover]
  - Utility component that makes building new components easier

- Show other components available
