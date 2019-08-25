# Feature: better layout

## Requirements

* Layout should render intuitively and consistently across screens, with minor adjustments to component proportions as needed.

### To do (in all screen sizes)

* All images are displayed with proportional height and width
	* Medium
		* iPad: 768 x 1024
		* iPad Pro: 1024 x 1366
	* Small
		* Galaxy S5: 360 x 640
		* Pixel 2 XL: 411 x 823
		* iPhone 5: 320 x 568
		* iPhone 6/7/8 Plus: 414 x 736
* All containers have consistent padding, margin, and grid-gap
	* Chrome and Firefox both render grids and flexboxes to same size and layout
* All children of containers are sized according to parent height/width
* All containers are sized within the given screen with no visible overflow (unless absolutely needed for minimum width/height)
* Containers adjust appropriately to portrait/landscape views
	* List viewers should switch intuitively between horizontal and vertical views

### Done

* Initial media queries removed for clarity