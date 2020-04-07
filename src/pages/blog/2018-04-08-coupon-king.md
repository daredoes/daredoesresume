---
templateKey: blog-post
title: 'Coupon King'
date: 2018-04-08T01:17:07.000Z
weight: 50
printable: true
visible: true
tags:
  - development
  - expo.io
  - mobile development
  - non-functional
  - educational
  - React Native
---

### When I was in college, I lived very close to a Burger King®. This was convenient, and their coupons made it very cheap. 

After ordering at least $100 worth of $3 coupon meals, I felt pretty confident I understood how their coupon system worked. The only factor I couldn't predict was the training of an employee. BK's coupon system has some pretty simple rules I've gathered over time.

1. A "trip" refers to a person or car making one or more orders.
2. A car may make no more than two orders.
3. No more than three coupon codes may be used in a single "trip".
4. A coupon code may only be used once per "trip".
5. Upgrade small fries to a large for $0.50 each. - This is less of a rule and more of a tip.
6. A customer must produce the code on their phones, or exchange a paper coupon. - This is the rule that depends on the training of an employee.
7. Coupon codes never expire
8. Coupon codes work nationally

None of these rules are listed in the BK application, of course. Each coupon says "one offer per customer per day", but while going to BK with two friends in my car, we were told we could not make more than two orders per car - establishing rule 2. When we attempted to use four codes for our planned meal, we were told no more than three coupons per car - establishing rule 3. We reasoned that rule 3 treated a car and a person as the same, due to experiences with using two coupons (one physical, one digital) in-person - establishing rule 1 and rule 6.

Through wanting double chicken fries and a large fries for $3, we discovered rule 4. Thanks to the kindness of an employee who knew us as usual, we discovered rule 5. Through a friend elsewhere in the United States, we established rule 8. Lastly, from my own life experiences saying memorized codes, I can confirm that codes never expire - establishing rule 7.

With these rules and their reasoning I felt confident I had reverse engineered the coupon system. At the end of a Friday night, while saying goodbye to a guest I had over, I gained motivation to make a clone of the BK application's coupon list and single pages. I spent the weekend developing an application called "Coupon King - Have It Anyways" that would allow a user to present as many BK coupon codes as desired, while appearing to be using the regular application. 

To clone the application, I set up a proxy between my laptop and my phone to intercept the assets being transferred to the BK application from their source. I was unable to decipher how they generate or acquire codes based on location to expand my overall pool of codes. Completed, this application showed the same colors, font, and animations as the BK app, but without all the restrictions on location, and code removal after usage.

This app has since become non-functional, due to updates to the BK app UI. Unless the employee is really guilible or something.

# I have never used this application at BK. It was developed for educational purposes. To look at stronger examples of coupon systems, check out Wendy's or McDonald's applications.