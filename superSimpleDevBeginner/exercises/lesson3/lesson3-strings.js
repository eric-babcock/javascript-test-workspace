// 3a. Create the text 'My name is:' as a string

'my name is: '

// 3b. 
'Eric'

// 3c.
'my name is: '+'Eric'

// 3d. At a restaurant, you order 1 coffee($5) and a 1 bagel($3). Using math, calculate the total cost, and using concatenation, create the text: 'total cost:$__' (replace __ with the total you calculated)
total_cost = 5+3

'total cost: $' + total_cost

// 3e. 
`total cost: $${total_cost}`

// 3f. 
alert(`total cost: $${total_cost}`)

// 3g 
menu = {
    coffee: 599,
    bagel: 295
}

total_cost = (menu.coffee + menu. bagel)/100

'total cost: $' + total_cost

// 3h. Do the same thing as 3g, but use a template string and interpolation. 
`total cost: $${total_cost}`

// 3i. Display the text from 3h in a popup

// 3j. Using a multi-line string, create the text from 3h and add a line of text underneath: 'thank you, come again!'. Display in a popup

alert(`total cost: $${total_cost}
Thank you, come again!`)

// 3k. Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88).

items = {
    basketball: 20.95,
    t_shirt: 7.99,
}

shipping = 4.99

basket = {
    item1: 'basketball',
    quantity1: 2,
    item2: 't_shirt',
    quantity2: 2,
}

alert(`Items(${basket.quantity1+basket.quantity2}):  $${(items.basketball*basket.quantity1)+(items.t_shirt*basket.quantity2)}
Shipping & handling: ${shipping*2}`)

