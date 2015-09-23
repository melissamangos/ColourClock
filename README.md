# Colour Clock
Displays the current time as a hexadecimal colour. 
<h2>How it Works</h2>
The program uses Epoch time to determine the current time, and calculates a hex value based on the digits.
The time is accurate to the current second, and the total timestamp is seven digits long.
<br>
For example, the Epoch time as I am writing this is <code>1443018567</code>, the program only uses <code>3018567</code>. 
From there, it determines hex values by grouping the digits into two, so the smallest hex digit would be <code>67 mod 16</code>, 
and the next one would be <code>56 mod 16</code>.
<br>
This ensures that, eventually, every single colour would be displayed. And since the colour changes every second, 
and there are 16^6 possible colours, it would take approximately 16,777,216 seconds, or 3.7 years, to display a 
colour that has already been seen.
