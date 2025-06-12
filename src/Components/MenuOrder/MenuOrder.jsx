
import './MenuOrder.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { BiSolidDish } from "react-icons/bi";
import { TbBowlFilled } from "react-icons/tb";
import { GiMeatCleaver } from "react-icons/gi";

export default function MenuOrder() {

    const GoTohome = useNavigate();

    const ClickHome = () => {
        GoTohome('/');
    }

    const [activeTab, setactiveTab] = useState(1)
    const ActiveTab = (index) => {
        setactiveTab(index)
    }

    return (
        <>
            <div className="menuContainer">
                <nav className="OrderNavbar">
                    <div className="NavbarContents">
                        <img className="NavLogo" src="/zizzling-chef-prototype/Logo.jpg" alt="Zizzling Chef" onClick={ClickHome}/>
                        <h2 className='OrderTitle'>Zizzling Chef</h2>
                    </div>
                </nav>
                <div className="tabsANDmenuContainer">
                    <div className="tabsANDmenu">
                        <div className="Tabs">
                            <div onClick={() => ActiveTab(1)} className={activeTab === 1 ? 'TabCore active' : 'TabCore'}>
                                <h1 className='zizzlingIcon'><TbBowlFilled/></h1>
                                <h3 className='tabname'>Sizzling</h3>                            
                            </div>
                            <div onClick={() => ActiveTab(2)} className={activeTab === 2 ? 'TabCore active' : 'TabCore'}>
                                <h1 className='zizzlingIcon'><GiMeatCleaver/></h1>
                                <h3 className='tabname'>Dishes</h3>                            
                            </div>
                            <div onClick={() => ActiveTab(3)} className={activeTab === 3 ? 'TabCore active' : 'TabCore'}>
                                <h1 className='zizzlingIcon'><BiSolidDish/></h1>
                                <h3 className='tabname'>Others</h3>                      
                            </div>
                        </div>
                        <div className="TabLogoName">{  activeTab === 1 ?   <h1 className='NameHead'><TbBowlFilled className='iconHead'/> Sizzling</h1> : 
                                                        activeTab === 2 ?   <h1 className='NameHead'><GiMeatCleaver className='iconHead'/> Dishes</h1> : 
                                                                            <h1 className='NameHead'><BiSolidDish className='iconHead'/> Others </h1> }
                                                                            </div>
                        <div className={activeTab === 1 ? 'menuOptions active' : 'menuOptions'}>
                            <div className="menuBox">
                                <h1>Pork Sisig Wet</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱165</h2>
                            </div>
                            <div className="menuBox">
                                <h1>Bangus Belly Silog</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱109    </h2>
                            </div>
                            <div className="menuBox">
                                <h1>Chicken Silog</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱165</h2>
                            </div>
                            <div className="menuBox">
                                <h1>PorkSisig-Wet</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱99</h2>
                            </div>
                            <div className="menuBox">
                                <h1>Chicken Sisig</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱165</h2>
                            </div>
                            <div className="menuBox smallTitle">
                                <h1>Home Made Tapsilog</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱109</h2>
                            </div>
                            <div className="menuBox">
                                <h1>Mush & Cheese</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱135</h2>
                            </div>
                        </div>
                        <div className={activeTab === 2 ? 'menuOptions active' : 'menuOptions'}>
                            <div className="menuBox smallerTitle">
                                <h1>Ala Oyo Spicy Garlic Chicken</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱385</h2>
                            </div>
                            <div className="menuBox">
                                <h1>Crispy Pata</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱585</h2>
                            </div>
                            <div className="menuBox">
                                <h1>Breaded Pork Chop</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱109</h2>
                            </div>
                            <div className="menuBox">
                                <h1>Oxtail Kare-Kare</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱355</h2>
                            </div>
                            <div className="menuBox">
                                <h1>Sinigang na Baboy</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱235</h2>
                            </div>
                            <div className="menuBox">
                                <h1>Sinigang na Hipon</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱135</h2>
                            </div>
                        </div>
                        <div className={activeTab === 3 ? 'menuOptions active' : 'menuOptions'}>
                            <div className="menuBox smallTitle">
                                <h1>Bacon & Ham Pizza</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱195</h2>
                            </div>
                            <div className="menuBox">
                                <h1>Banana Split Pie</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱100</h2>
                            </div>
                            <div className="menuBox smallTitle">
                                <h1>Ham & Cheese Pizza</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱195</h2>
                            </div>
                            <div className="menuBox smallerTitle">
                                <h1>Zizzling Chef Fried Chicken</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱290</h2>
                            </div>
                            <div className="menuBox">
                                <h1>Carbonara</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱150</h2>
                            </div>
                            <div className="menuBox">
                                <h1>Canton Guisado S</h1>
                                <p>An iconic drinking snack that has it all—a variety of crispy pig parts, chicken livers, and a punchy, acidic dressing.</p>
                                <h2>₱90</h2>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className="OrderView">
                <div className="OrderViewBox">
                    <h2 className="OrderViewTitle">My Order</h2>
                    <div className="orders">
                        <div className="scrollableOrder">
                        </div>
                    </div>
                    <footer className="OrderViewButton">
                            <button>Clear</button>
                            <button className='checkoutButton'>Checkout</button>
                    </footer>
                </div>
            </div>
        </>
    )
}
