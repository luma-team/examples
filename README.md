# Luma Examples

In this repo, you can find code examples of how to add Luma to your website. If anything is not working as expected, file an issue or contact us at support@lu.ma.

## Checkout Button

You can add a checkout button to your website, which will open a Luma checkout widget for people to register or pay for your event. Simply paste in the following code snippet with your event ID:

```html
<button
  class="luma-checkout--button"
  type="button"
  data-luma-action="checkout"
  data-luma-event-id="evt-YOUR-EVENT-ID"
>
  Register for Event
</button>

<script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" />
```

To get the code snippet with your event ID prefilled, go to the More tab on your Manage Event page, and follow the instructions in the Embed section.

### Advanced Usage

If you are adding multiple checkout buttons onto your page, you only need to include the `<script>` line above once.

If you want to use your own styling for the button, simply remove `class="luma-checkout--button` to get rid of our default styles.

If you want to trigger the checkout widget with another element on the page, simply add `data-luma-action="action"` and `data-luma-event-id="evt-YOUR-EVENT-ID"` to it. Don't forget to add the `<script>` to the page.

### Button Not Working?

Make sure you've included the `<script>` tag and it's loading properly. If your elements are dynamically rendered, the script may not recognize the button, and you will need to manually set up the button. To do so, execute the following JavaScript code after the button is rendered:

```js
window.luma && window.luma.initCheckout();
```

It is safe to call this function multiple times.
