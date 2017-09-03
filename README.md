
# 💡

## type an idea and press enter
## click to edit or delete
## drag idea to re-order


#*

This is an intepretation of the supplied spec. It differs in a couple of subtle ways. The 'blank idea box' is always visible and focused because when an idea hits, the user wants to get it down straight away, no superfluous clicking, no messing, no risk of forgetting. There is no title field because 140 characters is too short-form for a title to make sense.

As for the stretch, sorting became un-necessary without a title field so I implemented a draggable re-ordering system. The character count is always visible because when the user starts typing an idea they need to know straight away that they're going to be limited in length. It might change the structure of their phrasing. When they reach the final 15 characters the character count turns red. The delete action is on click/tap rather than hover because there is no concept of hover on touch devices and we want to work on mobile. Notifications have been used to highlight where the HTTP requests would be but I wouldn't use these to show the user that the idea has been saved, I would use them to warn and instruct the user on the odd occasion that the idea could not be saved.