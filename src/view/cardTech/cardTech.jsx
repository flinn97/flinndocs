
import { PageTemplate } from "flinntech";
import cardArch from "../../assets/cardArch.png"
import cardTech from "../../assets/cardTech.png"

export default class CardTech extends PageTemplate {
    constructor(props,) {
        super(props);

        this.state = {
            ...this.state,
            defaultClass: "fit",

        }
    }


    render() {
        return (
            <div className={this.props.pageClass || this.state.defaultClass} style={{ ...this.props.props.pageStyle, fontFamily: 'Arial, sans-serif', padding: '20px' }}>
    <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Description</h2>
    <p>FlinnTech provides a class called <strong>Card</strong> that integrates seamlessly with other technologies. It acts as a versatile container, suitable for creating various UI elements, including popups.</p>
    <p>This is a lightweight and extensible class that uses SCSS to control its UI. Below, we have listed all the card types currently available.</p>

    <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px' }}>Architecture</h2>
    <img src={cardArch} style={{ display: 'block', margin: '10px auto', maxWidth: '100%' }} alt="Architecture Diagram" />
    <p>The architecture is simple yet powerful, designed with an interface that ensures easy integration with other FlinnTech technologies.</p>

    <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px' }}>Usage</h2>
    <div style={{ marginLeft: '20px', paddingLeft: '10px', borderLeft: '2px solid #ccc' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Example 1: Full Card and Popup</h3>
        <img src={cardTech} style={{ display: 'block', margin: '10px auto', maxWidth: '100%' }} alt="Card Example" />
        <p>You build the main content outside the card and inject it into the card using the <code>mainContent</code> prop.</p>
        <p>Define the card type using the <code>type</code> prop, such as <em>tallCard</em> or <em>bigCard</em>.</p>
        <p>Select a theme for the card. The default theme is applied if none is specified.</p>
        <p>Note: The <strong>popupTech</strong> feature, which is detailed in the popupTech tab, utilizes the Card class to create popups like the one above. You don’t need to create popups manually.</p>
    </div>
    <div style={{ marginTop: '20px', paddingLeft: '10px', borderLeft: '2px solid #ccc' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Card:</h3>
        <p><strong>Minimum Syntax:</strong> <code>&lt;Card content? /&gt;</code></p>
        <p><strong>Requisites:</strong> Nothing is strictly required, but to display content in the card, pass in a <code>content</code> prop, which should be a React component.</p>
    </div>

    <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '10px' }}>All Types Available Today</h2>
    <p>Use the <code>type</code> prop to specify the card type and the <code>theme</code> prop to determine its appearance. These values are used to map the SCSS classes listed below:</p>

    <h3 style={{ fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>Default Theme</h3>
    <p><code>smallerCardDefault</code></p>
    <p><code>smallCardDefault</code></p>
    <p><code>normalCardDefault</code></p>
    <p><code>bigCardDefault</code></p>
    <p><code>biggerCardDefault</code></p>
    <p><code>biggestCardDefault</code></p>
    <p><code>tallCardDefault</code></p>
    <p><code>fitDefault</code></p>
    <p><code>autoDefault</code></p>
    <p><code>fullHeightCardDefault</code></p>
    <p><code>longCardDefault</code></p>
    <p><code>fullLengthCardDefault</code></p>
    <p><code>sideBarDefault</code></p>
    <p><code>topBarDefault</code></p>

    <h3 style={{ fontSize: '20px', marginTop: '20px', marginBottom: '10px' }}>NoBorder Theme</h3>
    <p><code>smallerCardNoBorder</code></p>
    <p><code>smallCardNoBorder</code></p>
    <p><code>normalCardNoBorder</code></p>
    <p><code>bigCardNoBorder</code></p>
    <p><code>biggerCardNoBorder</code></p>
    <p><code>biggestCardNoBorder</code></p>
    <p><code>tallCardNoBorder</code></p>
    <p><code>fitNoBorder</code></p>
    <p><code>autoNoBorder</code></p>
    <p><code>fullHeightCardNoBorder</code></p>
    <p><code>longCardNoBorder</code></p>
    <p><code>fullLengthNoBorder</code></p>
</div>
            // <div className={this.props.pageClass || this.state.defaultClass} style={{ ...this.props.props.pageStyle }}>
            //     <h2>Description</h2>
            //     <p>FlinnTech provides a class called Card that is integrated with all the other technologies. It provides containers of all sorts including popups </p>
            //     <p>It's a simple class that can be extended and it uses scss to control the ui. I display a list of all the cards we currently have below</p>
            //     <h2>Architecture</h2>
            //     <img />
            //     <p>Very simple architecture but rigged with an interface so it can be integrated with other flinntech.</p>
            //     <h2>Usage</h2>
            //     <div style="margin-left: 20px;"><h3>Example 1 full card and popup:</h3>
            //         <img />
            //         <p>You build the main content from outside the card and then inject into the card using the mainContent prop.</p>
            //         <p>Define the type of card you want with type ie: tallCard, bigCard etc.</p>
            //         <p>Then decide your theme. default is the default theme.</p>
            //         <p>This is a popup which you will read in the popupTech tab is not necessary to manualy create but the popupTech uses the Card class to create popups like what you see above.</p>
            //     </div>
            //     <div style="margin-top: 20px;"><h3>Card:</h3>
            //         <p><b>Minimum Syntax: </b> &lt; Card content?  /&gt; </p>
            //         <b> Requisites</b><p>Nothing required but if you want the card to display something you need to pass in content which is a react component</p>
            //     </div>
            //     <h2>All types available today</h2>
            //     <p>You send in type for the type of card you want and theme for how that card displays. We then take those strings and use them to get the scss classes below</p>
            //     <h3>Default Theme</h3>
            //     <p>smallerCardDefault</p>
            //     <p>smallCardDefault</p>
            //     <p>normalCardDefault</p>
            //     <p>bigCardDefault</p>
            //     <p>biggerCardDefault</p>
            //     <p>biggestCardDefault</p>
            //     <p>tallCardDefault</p>
            //     <p>fitDefault</p>
            //     <p>autoDefault</p>
            //     <p>fullHeightCardDefault</p>
            //     <p>longCardDefault</p>
            //     <p>fullLengthCardDefault</p>
            //     <p>sideBarDefault</p>
            //     <p>topBarDefault</p>
            // <h3>NoBorder Theme</h3>
            //     <p>smallerCardNoBorder</p>
            //     <p>smallCardNoBorder</p>
            //     <p>normalCardNoBorder</p>
            //     <p>bigCardNoBorder</p>
            //     <p>biggerCardNoBorder</p>
            //     <p>biggestCardNoBorder</p>
            //     <p>tallCardNoBorder</p>
            //     <p>fitNoBorder</p>
            //     <p>autoNoBorder</p>
            //     <p>fullHeightCardNoBorder</p>
            //     <p>longCardNoBorder</p>
            //     <p>fullLengthNoBorder</p>

            // </div>
        )
    }


}