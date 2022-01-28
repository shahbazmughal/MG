import React, {useState} from 'react'
import { Helmet } from "react-helmet"
import PriceBlock02 from '../PriceBlock02'
import './style.css'

function PriceBlock01() {

  const [state, setState] = useState({
    selected_mo:1,
    ma_tab_selected1: "tabs_selectedTab tab1",
    ma_tab_selected2: " tab2",
    month: "month",
    pvalue1: "FREE",
    pvalue2: "$7",
    pvalue3: "$17",
    pvalue4: "$27",
    pvalue44: "$27",
    ddVal: 1,
    mlink1: "https://billing.mumara.com/cart.php?a=add&pid=63&billingcycle=monthly",
    mlink2: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly",
    mlink3: "https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=monthly",
    mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=42",
    tableFeatures: "hide",
    topen:0,
    mdd_value: 0,
    panel1: "hide",
    panel2:"hide",
    panel3:"hide",
    panel4:"hide",
    panel5:"hide",
    panel6:"hide",
    panel7:"hide",
    tab1: " active show",
    tab2: " ",
    tabs_selectedTab1: " tabs_selectedTab",
    tabs_selectedTab2: "",
    open1: "", open2: "", open3: "", open4: "", open5: "", open6: "", open7: ""
  });

  const [values, setValues] = useState({

  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.value, });
    setValues({ ...values, [name]: event.target.value });
  };

  const comPkgChange =(e)=> {
    var val = e.target.value;
    setState({...state, ddVal:val});
    if(val == 1) {
      if(state.selected_mo == 1) {
        setState({...state, ddVal:val});
        setState({...state, mdd_value:val, pvalue4: "$27", pvalue44: "$27", ddVal:val, mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=42"});
      } else {
        setState({...state, mdd_value:val, pvalue4: "$267", pvalue44: "$267", ddVal:val, mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=42"});
      }
    } else if(val == 2) {
      if(state.selected_mo == 1) {
        setState({...state, mdd_value:val, pvalue4: "$37", pvalue44: "$37", ddVal:val, mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=39"});
      } else {
        setState({...state, mdd_value:val, pvalue4: "$367", pvalue44: "$367", ddVal:val, mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=39"});
      }
    } else if(val == 3) {
      if(state.selected_mo == 1) {
        setState({...state, mdd_value:val, pvalue4: "$47", pvalue44: "$47", ddVal:val, mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=40"});
      } else {
        setState({...state, mdd_value:val, pvalue4: "$467", pvalue44: "$467", ddVal:val, mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=40"});
      }
    } else if(val == 4) {
      if(state.selected_mo == 1) {
        setState({...state, mdd_value:val, pvalue4: "$97", pvalue44: "$97", ddVal:val, mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=41"});
      } else {
        setState({...state, mdd_value:val, pvalue4: "$967", pvalue44: "$967", ddVal:val, mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=41"});
      }
    }
  }

  const monthClick =()=> {
    if(state.ddVal == 1) {
      setState({...state, selected_mo:1, ma_tab_selected1: " tabs_selectedTab", ma_tab_selected2: " ", month:"month", pvalue2: "$7", pvalue3: "$17", pvalue4: "$27", pvalue44: "$27", 
      mlink1: "https://billing.mumara.com/cart.php?a=add&pid=63&billingcycle=monthly", 
      mlink2: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly", 
      mlink3: "https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=monthly", 
      mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=42"});
    } else if (state.ddVal == 2) {
      setState({...state, selected_mo:1, ma_tab_selected1: " tabs_selectedTab", ma_tab_selected2: " ", month:"month", pvalue2: "$7", pvalue3: "$17", pvalue4: "$37",  pvalue44: "$37", 
      mlink1: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly", 
      mlink2: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly", 
      mlink3: "https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=monthly", 
      mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=39"});
    } else if (state.ddVal == 3) {
      setState({...state, selected_mo:1, ma_tab_selected1: " tabs_selectedTab", ma_tab_selected2: " ", month:"month", pvalue2: "$7", pvalue3: "$17", pvalue4: "$47",  pvalue44: "$47", 
      mlink1: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly", 
      mlink2: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly", 
      mlink3: "https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=monthly", 
      mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=40"});
    } else if (state.ddVal == 4) {
      setState({...state, selected_mo:1, ma_tab_selected1: " tabs_selectedTab", ma_tab_selected2: " ", month:"month", pvalue2: "$7", pvalue3: "$17", pvalue4: "$97", pvalue44: "$97", 
      mlink1: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly", 
      mlink2: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly", 
      mlink3: "https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=monthly", 
      mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=41"});
    }
  }

  const annualClick =()=> {
    if(state.ddVal == 1) {
      setState({...state, selected_mo:2, ma_tab_selected1: " ", ma_tab_selected2:" tabs_selectedTab", month: "year", pvalue2: "$47", pvalue3: "$147", pvalue4: "$267", pvalue44: "$267", 
      mlink1: "https://billing.mumara.com/cart.php?a=add&pid=63&billingcycle=annually", 
      mlink2: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly", 
      mlink3: "https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=annually", 
      mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=42"});
    } else if (state.ddVal == 2) {
      setState({...state, selected_mo:2, ma_tab_selected1: " ", ma_tab_selected2:" tabs_selectedTab", month: "year", pvalue2: "$47", pvalue3: "$147", pvalue4: "$367",  pvalue44: "$367", 
      mlink1: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=annually", 
      mlink2: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly", 
      mlink3: "https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=annually", 
      mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=39"});
    } else if (state.ddVal == 3) {
      setState({...state, selected_mo:2, ma_tab_selected1: " ", ma_tab_selected2:" tabs_selectedTab", month: "year", pvalue2: "$47", pvalue3: "$147", pvalue4: "$467",  pvalue44: "$467", 
      mlink1: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=annually", 
      mlink2: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly", 
      mlink3: "https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=annually", 
      mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=40"});
    } else if (state.ddVal == 4) {
      setState({...state, selected_mo:2, ma_tab_selected1: " ", ma_tab_selected2:" tabs_selectedTab", month: "year", pvalue2: "$47", pvalue3: "$147", pvalue4: "$967", pvalue44: "$967",
      mlink1: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=annually", 
      mlink2: "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly", 
      mlink3: "https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=annually", 
      mlink4: "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=41"});
    }
  }

  const showTable =()=> {
    var value = state.topen;
    if(value == 0) {
      setState({...state, tableFeatures: "show", topen:1});
    } else {
      setState({...state, tableFeatures: "hide", topen:0});
    }
  }

  const changeMiniDD =(e)=> {
    var dvalue = e.target.value;
    setState({...state, mdd_value: dvalue});
    if(dvalue == 1) {
      if(state.selected_mo == 1) {
        setState({...state, pvalue44: "$27", mdd_value: dvalue});
      } else {
        setState({...state, pvalue44: "$267", mdd_value: dvalue});
      }
    } else if(dvalue == 2) {
      if(state.selected_mo == 1) {
        setState({...state, pvalue44: "$37", mdd_value: dvalue});
      } else {
        setState({...state, pvalue44: "$367", mdd_value: dvalue});
      }
    } else if(dvalue == 3) {
      if(state.selected_mo == 1) {
        setState({...state, pvalue44: "$47", mdd_value: dvalue});
      } else {
        setState({...state, pvalue44: "$467", mdd_value: dvalue});
      }
    } else if(dvalue == 4) {
      if(state.selected_mo == 1) {
        setState({...state, pvalue44: "$97", mdd_value: dvalue});
      } else {
        setState({...state, pvalue44: "$967", mdd_value: dvalue});
      }
    }
  } 

  const openPanel =(e)=> {
    var id = e.target.dataset.pid;
    console.log(id);
    if(id == 1) {
      setState({...state, panel1: "", panel2:"hide", panel3:"hide", panel4:"hide", panel5:"hide", panel6:"hide", panel7:"hide", open1: " open", open2: "", open3: "", open4: "", open5: "", open6: "", open7: ""});
    } else if (id == 2) {
      setState({...state, panel1: "hide", panel2:"", panel3:"hide", panel4:"hide", panel5:"hide", panel6:"hide", panel7:"hide", open1: "", open2: " open", open3: "", open4: "", open5: "", open6: "", open7: ""});
    } else if (id == 3) {
      setState({...state, panel1: "hide", panel2:"hide", panel3:"", panel4:"hide", panel5:"hide", panel6:"hide", panel7:"hide", open1: "", open2: "", open3: " open", open4: "", open5: "", open6: "", open7: ""});
    } else if (id == 4) {
      setState({...state, panel1: "hide", panel2:"hide", panel3:"hide", panel4:"", panel5:"hide", panel6:"hide", panel7:"hide", open1: "", open2: "", open3: "", open4: " open", open5: "", open6: "", open7: ""});
    } else if (id == 5) {
      setState({...state, panel1: "hide", panel2:"hide", panel3:"hide", panel4:"hide", panel5:"", panel6:"hide", panel7:"hide", open1: "", open2: "", open3: "", open4: "", open5: " open", open6: "", open7: ""});
    } else if (id == 6) {
      setState({...state, panel1: "hide", panel2:"hide", panel3:"hide", panel4:"hide", panel5:"hide", panel6:"", panel7:"hide", open1: "", open2: "", open3: "", open4: "", open5: "", open6: " open", open7: ""});
    } else if (id == 7) {
      setState({...state, panel1: "hide", panel2:"hide", panel3:"hide", panel4:"hide", panel5:"hide", panel6:"hide", panel7:"", open1: "", open2: "", open3: "", open4: "", open5: "", open6: "", open7: "open"});
    }
  }

  const selectTab =(e)=> {
    var id = e.target.dataset.id;
    console.log(id);
    if(id == 1) {
      setState({...state, tab1: " active show", tab2: " ", tabs_selectedTab1: " tabs_selectedTab",tabs_selectedTab2: " ", panel1: "hide", panel2:"hide", panel3:"hide", panel4:"hide", panel5:"hide", panel6:"hide", panel7:"hide", open1: "", open2: "", open3: "", open4: "", open5: "", open6: "", open7: "" });
    } else {
      setState({...state, tab1: " ", tab2: " active show", tabs_selectedTab1: " ",tabs_selectedTab2: " tabs_selectedTab", panel1: "hide", panel2:"hide", panel3:"hide", panel4:"hide", panel5:"hide", panel6:"hide", panel7:"hide", open1: "", open2: "", open3: "", open4: "", open5: "", open6: "", open7: "" });
    }
  }
  
  return (
  <div className="pt-40 feature-block-01" id="mainPricing">

    <div className="css-eqz5y2">
      <div className="react-tabs" data-tabs="true">
        <ul className="tabs_tabList" role="tablist">
          <li className={"tabs_tab "+state.tabs_selectedTab1} role="tab" id="react-tabs-0" data-id="1" onClick={selectTab}>Self-Hosted</li>
          <li className={"tabs_tab"+state.tabs_selectedTab2} role="tab" id="react-tabs-2" data-id="2" onClick={selectTab}>Cloud</li>
        </ul>
      </div>
    </div>

    <div className="tab-content">

      <div className={"tab-pane fade "+state.tab1} id="tab1">
        <section id="pricing" className="pricing bg-white">
          <div className="head-title">
            <h3 id="hth3">Self-Hosted</h3>
            <p id="hthp">Host it on your server</p>
          </div>
          <div className="css-1l6651k">
            <div className="react-tabs" data-tabs="true">
              <ul className="tabs_tabList" role="tablist">
                <li className={`tabs_tab `+state.ma_tab_selected1} onClick={monthClick} data-selected={state.selected_mo} data-dd={state.ddVal}>Monthly</li>
                <li className={`tabs_tab `+state.ma_tab_selected2} onClick={annualClick} data-selected={state.selected_mo} data-dd={state.ddVal}>Annually</li>
              </ul>
              <div className="css-jgj9px"></div>
            </div>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="box">
                  <div className="pheader-blk">
                    <h3 style={{color: `#718096`}} className="mb-0">Lite</h3>
                    <div className='css-mm6smv'>(Single User)</div>
                    <div className="css-zkfaav">
                      <div className="css-vurnku">
                        <div className="css-lyksdo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-148af3a-ContentIcon">
                            <path d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M5,19V5h14 l0.002,14H5z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-vurnku">
                        <div className="css-1g1x2nw">
                          <h2 className="css-16otpic">{state.pvalue1}</h2>
                          <div className="css-1dyuyzl">/month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="css-10p1mec"></div>
                  <div className="price-feature-list">
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Single user</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">5000 Contacts</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">All modules except</h6>
                      </div>
                    </div>
                    <div className="css-hv626q inner">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-148af3a-ContentIcon">
                            <path d="M12,5c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S15.859,5,12,5z M12,17c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S14.757,17,12,17z"></path>
                            <path d="M12,9c-1.627,0-3,1.373-3,3s1.373,3,3,3s3-1.373,3-3S13.627,9,12,9z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Segments</h6>
                      </div>
                    </div>
                    <div className="css-hv626q inner">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-148af3a-ContentIcon">
                            <path d="M12,5c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S15.859,5,12,5z M12,17c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S14.757,17,12,17z"></path>
                            <path d="M12,9c-1.627,0-3,1.373-3,3s1.373,3,3,3s3-1.373,3-3S13.627,9,12,9z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Drips</h6>
                      </div>
                    </div>
                    <div className="css-hv626q inner">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-148af3a-ContentIcon">
                            <path d="M12,5c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S15.859,5,12,5z M12,17c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S14.757,17,12,17z"></path>
                            <path d="M12,9c-1.627,0-3,1.373-3,3s1.373,3,3,3s3-1.373,3-3S13.627,9,12,9z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Triggers</h6>
                      </div>
                    </div>
                    <div className="css-hv626q inner">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-148af3a-ContentIcon">
                            <path d="M12,5c-3.859,0-7,3.141-7,7s3.141,7,7,7s7-3.141,7-7S15.859,5,12,5z M12,17c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5 S14.757,17,12,17z"></path>
                            <path d="M12,9c-1.627,0-3,1.373-3,3s1.373,3,3,3s3-1.373,3-3S13.627,9,12,9z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Staff Management</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Community Support</h6>
                      </div>
                    </div>
                  </div>
                  <div className="css-hv626q price-update">
                    <div className="css-9uke8i">
                      <div className="css-wjyr4o">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon fill-success wh24">
                          <path d="M21.781,13.875l-2-2.5C19.591,11.138,19.304,11,19,11h-6V9h6c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5	C4.696,2,4.409,2.138,4.219,2.375l-2,2.5c-0.292,0.365-0.292,0.885,0,1.25l2,2.5C4.409,8.862,4.696,9,5,9h6v2H5	c-1.103,0-2,0.897-2,2v3c0,1.103,0.897,2,2,2h6v4h2v-4h6c0.304,0,0.591-0.138,0.781-0.375l2-2.5	C22.073,14.76,22.073,14.24,21.781,13.875z M4.281,5.5L5.48,4H19l0.002,3H5.48L4.281,5.5z M18.52,16H5v-3h13.52l1.2,1.5L18.52,16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="css-nnrka7">
                      <h6 className="css-1pp2xaq text-success">3-Month Updates</h6>
                    </div>
                  </div>
                  <a href={state.mlink1} id="btn-free" className="btn-buy">Order Now</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="box">
                  <div className="pheader-blk">
                    <h3 style={{color: `#718096`}} className="mb-0">Personal</h3>
                    <div className='css-mm6smv'>(Single User)</div>
                    <div className="css-zkfaav">
                      <div className="css-vurnku">
                        <div className="css-lyksdo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-148af3a-ContentIcon">
                            <path d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M5,19V5h14 l0.002,14H5z"></path>
                            <circle cx="12" cy="12" r="1.5"></circle>
                          </svg>
                        </div>
                      </div>
                      <div className="css-vurnku">
                        <div className="css-1g1x2nw">
                          <h2 className="css-16otpic">{state.pvalue2}</h2>
                          <div className="css-1dyuyzl">/{state.month}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="css-10p1mec"></div>
                  <div className="price-feature-list">
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Everything as in Lite Edition</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Unlimited Contacts</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Unlimited Lists</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Unlimited Nodes</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Unlimited Domains</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Support Desk</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Community Support</h6>
                      </div>
                    </div>
                  </div>                    
                  <div className="css-hv626q price-update">
                    <div className="css-9uke8i">
                      <div className="css-wjyr4o">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon fill-success wh24">
                          <path d="M21.781,13.875l-2-2.5C19.591,11.138,19.304,11,19,11h-6V9h6c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5	C4.696,2,4.409,2.138,4.219,2.375l-2,2.5c-0.292,0.365-0.292,0.885,0,1.25l2,2.5C4.409,8.862,4.696,9,5,9h6v2H5	c-1.103,0-2,0.897-2,2v3c0,1.103,0.897,2,2,2h6v4h2v-4h6c0.304,0,0.591-0.138,0.781-0.375l2-2.5	C22.073,14.76,22.073,14.24,21.781,13.875z M4.281,5.5L5.48,4H19l0.002,3H5.48L4.281,5.5z M18.52,16H5v-3h13.52l1.2,1.5L18.52,16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="css-nnrka7">
                      <h6 className="css-1pp2xaq text-success">Lifetime updates</h6>
                    </div>
                  </div>
                  <a href={state.mlink2} id="btn-personal" className="btn-buy">Order Now</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6"  data-aos-delay="200">
                <div className="box feature-block">
                  <div className="pheader-blk">
                    <h3 className="mb-0">Professional</h3>
                    <div className='css-mm6smv'>(Single User)</div>
                    <div className="css-zkfaav">
                      <div className="css-vurnku">
                        <div className="css-lyksdo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-148af3a-ContentIcon">
                            <path d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M5,19V5h14 l0.002,14H5z"></path>
                            <circle cx="9.5" cy="12" r="1.5"></circle>
                            <circle cx="14.5" cy="12" r="1.5"></circle>
                          </svg>
                        </div>
                      </div>
                      <div className="css-vurnku">
                        <div className="css-1g1x2nw">
                          <h2 className="css-16otpic">{state.pvalue3}</h2>
                          <div className="css-1dyuyzl">/{state.month}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="css-10p1mec"></div>
                  <div className="price-feature-list">
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Everything as in Personal Edition</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Segments</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Drips</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Triggers</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Staff Management</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Support Desk</h6>
                      </div>
                    </div>
                  </div>
                  <div className="css-hv626q price-update">
                    <div className="css-9uke8i">
                      <div className="css-wjyr4o">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon fill-success wh24">
                          <path d="M21.781,13.875l-2-2.5C19.591,11.138,19.304,11,19,11h-6V9h6c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5	C4.696,2,4.409,2.138,4.219,2.375l-2,2.5c-0.292,0.365-0.292,0.885,0,1.25l2,2.5C4.409,8.862,4.696,9,5,9h6v2H5	c-1.103,0-2,0.897-2,2v3c0,1.103,0.897,2,2,2h6v4h2v-4h6c0.304,0,0.591-0.138,0.781-0.375l2-2.5	C22.073,14.76,22.073,14.24,21.781,13.875z M4.281,5.5L5.48,4H19l0.002,3H5.48L4.281,5.5z M18.52,16H5v-3h13.52l1.2,1.5L18.52,16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="css-nnrka7">
                      <h6 className="css-1pp2xaq text-success lifetime-support">Lifetime updates</h6>
                    </div>
                  </div>
                  <a href={state.mlink3} id="btn-pro" className="btn-buy">Order Now</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="box commercial">
                  <div className="pheader-blk">
                    <h3 style={{color: `#718096`}} className="mb-0">Commercial</h3>
                    <div style={{height:`28px`}}></div>
                    <div className="css-zkfaav">
                      <div className="css-vurnku">
                        <div className="css-lyksdo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-148af3a-ContentIcon">
                            <path d="M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M5,19V5h14 l0.002,14H5z"></path>
                            <circle cx="8" cy="8" r="1.5"></circle>
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="16" cy="16" r="1.5"></circle>
                          </svg>
                        </div>
                      </div>
                      <div className="css-vurnku">
                        <div className="css-1g1x2nw">
                          <h2 className="css-16otpic">{state.pvalue4}</h2>
                          <div className="css-1dyuyzl">/{state.month}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                    
                  <div className="css-10p1mec"></div>
                  <div className="dd-filter">
                    <select className="form-control" value={state.ddVal} id="selfHostDD2" onChange={comPkgChange}>
                      <option defaultValue="1" value="1">10 Users</option>
                      <option defaultValue="2" value="2">25 Users</option>
                      <option defaultValue="3" value="3">100 Users</option>
                      <option defaultValue="4" value="4">Unlimited Users</option>
                    </select>
                  </div>
                  <div className="price-feature-list">
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Every as in Professional Edition</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">User Management</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Packages</h6>
                      </div>
                    </div>
                    <div className="css-hv626q">
                      <div className="css-9uke8i">
                        <div className="css-wjyr4o">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon">
                            <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="css-nnrka7">
                        <h6 className="css-1pp2xaq">Premium Support</h6>
                      </div>
                    </div>
                  </div>
                  <div className="css-hv626q price-update">
                    <div className="css-9uke8i">
                      <div className="css-wjyr4o">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-5yfqlt-ContentIcon fill-success wh24">
                          <path d="M21.781,13.875l-2-2.5C19.591,11.138,19.304,11,19,11h-6V9h6c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5	C4.696,2,4.409,2.138,4.219,2.375l-2,2.5c-0.292,0.365-0.292,0.885,0,1.25l2,2.5C4.409,8.862,4.696,9,5,9h6v2H5	c-1.103,0-2,0.897-2,2v3c0,1.103,0.897,2,2,2h6v4h2v-4h6c0.304,0,0.591-0.138,0.781-0.375l2-2.5	C22.073,14.76,22.073,14.24,21.781,13.875z M4.281,5.5L5.48,4H19l0.002,3H5.48L4.281,5.5z M18.52,16H5v-3h13.52l1.2,1.5L18.52,16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="css-nnrka7">
                      <h6 className="css-1pp2xaq text-success">Lifetime updates</h6>
                    </div>
                  </div>
                  <a href={state.mlink4} id="btn-com" className="btn-buy">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ftable-blk" className="pricing bg-light">
          <div className="container" data-aos="fade-up">

            <header className="head-title">
              <p>Plan Comparison</p>
            </header>

            <div className="row gy-4" data-aos="fade-left">
              <div className="col-lg-12 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                <table className="table table-striped" id="price-compare-table" cellSpacing="0" cellPadding="0">
                  <thead>
                    <tr>
                      <th width="40%" scope="col"></th>
                      <th width="20%" scope="col" className="align-center">Personal</th>
                      <th width="20%" scope="col" className="align-center">Professional</th>
                      <th width="20%" scope="col" className="align-center">Commercial</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Users</td>
                      <td>1</td>
                      <td>1</td>
                      <td>
                        <div className="f2user-blk">
                          <select id="f2user" className="form-control" value={state.mdd_value} onChange={changeMiniDD}>
                            <option defaultValue="1" value="1">10</option>
                            <option defaultValue="2" value="2">25</option>
                            <option defaultValue="3" value="3">100</option>
                            <option defaultValue="4" value="4">Unlimited</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>{state.pvalue1}</td>
                      <td id="priceEs1">{state.pvalue2}</td>
                      <td id="pricePro1">{state.pvalue3}</td>
                      <td id="pricePro2">{state.pvalue44}</td>
                    </tr>
                    <tr>
                      <td>Billing Cycle</td>
                      <td id="cycle1">/{state.month}</td>
                      <td id="cycle2">/{state.month}</td>
                      <td id="cycle3">/{state.month}</td>
                    </tr>
                    <tr>
                      <td>Updates</td>
                      <td>Lifetime</td>
                      <td>Lifetime</td>
                      <td>Lifetime</td>
                    </tr>
                  </tbody>
                </table>
                <div className="table-feature-title text-center"><button id="feature1" className="btn btn-success btn-sm" data-topen={state.topen} onClick={showTable}>+ Features +</button></div>
                <table className={`table table-striped `+state.tableFeatures} id="price-compare-table2">
                  <tbody>
                    <tr>
                      <td width="40%">List Management</td>
                      <td width="20%"><i className="bi-check-circle circle-no"></i></td>
                      <td width="20%"><i className="bi-check-circle circle-no"></i></td>
                      <td width="20%"><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Custom Fields</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Suppression</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Contacts Management</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Bulk Update</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Broadcast Editor</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Spintags</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Future Scheduling</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Bounce Processing</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Custom Bounce Rules</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Sending Domains</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Custom Tracking Domains</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>DKIM Keys</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Sending Nodes</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Web Forms</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Feedback Loops</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Multithreading</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Custom Headers</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Restful API</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Primary Domain Branding</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Advanced Statistics</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Geo Tracking</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Bug Reporting / Tracking</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Live Updates</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Dynamic Content Tags</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>
                        ESP Integrations
                        <small>(Amazon SES, Mailgun, Mailjet, Sendgrid, Sparkpost and more)</small>
                      </td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Split Tests</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Segments</td>
                      <td><i className="bi bi-x-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Drip Campaigns</td>
                      <td><i className="bi bi-x-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Triggers</td>
                      <td><i className="bi-x-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Staff Management</td>
                      <td><i className="bi-x-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>User Management</td>
                      <td><i className="bi-x-circle circle-no"></i></td>
                      <td><i className="bi-x-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Packages</td>
                      <td><i className="bi-x-circle circle-no"></i></td>
                      <td><i className="bi-x-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Community Support</td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Support Desk</td>
                      <td><i className="bi-x-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                    <tr>
                      <td>Premium Support</td>
                      <td><i className="bi-x-circle circle-no"></i></td>
                      <td><i className="bi-x-circle circle-no"></i></td>
                      <td><i className="bi-check-circle circle-no"></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

            </div>

        </section>

        <section id="camp-faq1" className="pricing bg-white">
          <div className="css-1lx7oj">
            <h6 className="css-1pp2xaq"><span className="css-11s65qb">NEED ANSWERS? WE GOT’EM</span></h6>
            <h2 className="css-8idint">Frequently Asked Questions</h2>
          </div>
          <div className="css-jgj9px"></div>
          <div className="css-lf9p4c camp-accordian">
            <div data-accordion-component="Accordion" className="accordion">
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open1} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-0" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-0" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="1" onClick={openPanel}>
                      <div className="css-166hnro" onClick={openPanel} data-pid="1">
                        <div className="css-ae809u" data-pid="1">
                          <svg data-pid="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="1">How can I upgrade my account?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel1} role="region" aria-labelledby="accordion__heading-raa-0" id="accordion__panel-raa-0">
                    <div className="css-1chvpb5">You can upgrade your account at any time by navigating to the associated product/service under your billing panel and find the upgrade options there.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open2} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-1" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-1" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="2">
                      <div className="css-166hnro" onClick={openPanel} data-pid="2">
                        <div className="css-ae809u" data-pid="2">
                          <svg data-pid="2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="2">How does “Mumara Campaigns” work?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel2} role="region" aria-labelledby="accordion__heading-raa-1" id="accordion__panel-raa-1">
                    <div className="css-1chvpb5">MumaraCampaigns is an email marketing automation system that empowers businesses to easily send a series of emails to their clientele or a segmented chunk. We’ve built a powerful infrastructure that scales gracefully and handles multi-transactional processes so you don’t have to deal with the complexity and hassle of optimizing much.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open3} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-2" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-2" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="3">
                      <div className="css-166hnro" onClick={openPanel} data-pid="3">
                        <div className="css-ae809u" data-pid="3">
                          <svg data-pid="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="3">How does your billing work?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel3} role="region" aria-labelledby="accordion__heading-raa-2" id="accordion__panel-raa-2" hidden="">
                    <div className="css-1chvpb5">Upon signup, you’ll be taken to the invoice where you can select from the available payment methods and upon successful payment, you’ll get the product activated for instant download. If you have subscribed to auto-billing, you’ll be automatically charged at the end of every billing cycle.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open4} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-3" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-3" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="4">
                      <div className="css-166hnro" onClick={openPanel} data-pid="4">
                        <div className="css-ae809u" data-pid="4">
                          <svg data-pid="4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="4">Can I cancel my subscription?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel4} role="region" aria-labelledby="accordion__heading-raa-3" id="accordion__panel-raa-3" hidden="">
                    <div className="css-1chvpb5">We do offer a 14-days trial plan on our cloud hosting that includes all addons. Alternatively, you can click here to deploy a trial plan.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open5} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-4" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-4" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="5">
                      <div className="css-166hnro" onClick={openPanel} data-pid="5">
                        <div className="css-ae809u" data-pid="5">
                          <svg data-pid="5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="5">Can I test before I purchase?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel5} role="region" aria-labelledby="accordion__heading-raa-4" id="accordion__panel-raa-4" >
                    <div className="css-1chvpb5">We do offer a 14-days trial plan on our cloud hosting that includes all addons. Alternatively, you can click here to deploy a trial plan.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open6} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-5" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-5" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="6">
                      <div className="css-166hnro" onClick={openPanel} data-pid="6">
                        <div className="css-ae809u" data-pid="6">
                          <svg data-pid="6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="6">Do I get an SMTP or IP address?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel6} role="region" aria-labelledby="accordion__heading-raa-5" id="accordion__panel-raa-5">
                    <div className="css-1chvpb5">This is a self-hosted edition that you’ll need to host on your own server and connect any third-party SMTP or any other integrated ESP account e.g. Amazon SES, Sengdrid, Mailgun, Mailjet, Sparkpost, Elastic Email and more. Mumara doesn’t provide any SMTP or IP addresses with this edition of the product. If you are looking for an email service, you may look into our other product <a href="https://mumara.com/one/">MumaraOne</a>.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open7} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-6" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-6" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="7">
                      <div className="css-166hnro" onClick={openPanel} data-pid="7">
                        <div className="css-ae809u" data-pid="7">
                          <svg data-pid="7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="7">What server specs do I need?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel7} role="region" aria-labelledby="accordion__heading-raa-6" id="accordion__panel-raa-6">
                    <div className="css-1chvpb5">Although MumaraCampaigns does also run on shared hosting plans, but we highly suggest for a dedicated machine with 4GB or higher RAM. More sugar you add, sweeter it becomes.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={"tab-pane fade"+state.tab2} id="tab2">
        <PriceBlock02 />
        <section id="camp-faq2" className="pricing bg-light">
          <div className="css-1lx7oj">
            <h6 className="css-1pp2xaq"><span className="css-11s65qb">NEED ANSWERS? WE GOT’EM</span></h6>
            <h2 className="css-8idint">Frequently Asked Questions</h2>
          </div>
          <div className="css-jgj9px"></div>
          <div className="css-lf9p4c camp-accordian">
            <div data-accordion-component="Accordion" className="accordion">
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open1} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-0" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-0" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="1" onClick={openPanel}>
                      <div className="css-166hnro" onClick={openPanel} data-pid="1">
                        <div className="css-ae809u" data-pid="1">
                          <svg data-pid="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="1">How can I upgrade my account?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel1} role="region" aria-labelledby="accordion__heading-raa-0" id="accordion__panel-raa-0">
                    <div className="css-1chvpb5">You can upgrade your account at any time by navigating to the associated product/service under your billing panel and find the upgrade options there.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open2} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-1" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-1" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="2">
                      <div className="css-166hnro" onClick={openPanel} data-pid="2">
                        <div className="css-ae809u" data-pid="2">
                          <svg data-pid="2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="2">How does “Mumara Campaigns” work?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel2} role="region" aria-labelledby="accordion__heading-raa-1" id="accordion__panel-raa-1">
                    <div className="css-1chvpb5">MumaraCampaigns is an email marketing automation system that empowers businesses to easily send a series of emails to their clientele or a segmented chunk. We’ve built a powerful infrastructure that scales gracefully and handles multi-transactional processes so you don’t have to deal with the complexity and hassle of optimizing much.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open3} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-2" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-2" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="3">
                      <div className="css-166hnro" onClick={openPanel} data-pid="3">
                        <div className="css-ae809u" data-pid="3">
                          <svg data-pid="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="3">How does your billing work?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel3} role="region" aria-labelledby="accordion__heading-raa-2" id="accordion__panel-raa-2" hidden="">
                    <div className="css-1chvpb5">Upon signup, you’ll be taken to the invoice where you can select from the available payment methods and upon successful payment, you’ll get the cloud instance deployed within 5 minutes and you’ll receive the login information by email. If you have subscribed to auto-billing, you’ll be automatically charged at the end of every billing cycle.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open4} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-3" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-3" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="4">
                      <div className="css-166hnro" onClick={openPanel} data-pid="4">
                        <div className="css-ae809u" data-pid="4">
                          <svg data-pid="4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="4">Can I cancel my subscription?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel4} role="region" aria-labelledby="accordion__heading-raa-3" id="accordion__panel-raa-3" hidden="">
                    <div className="css-1chvpb5">Yes, there is no contract at all. You can cancel your subscription at any time.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open5} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-4" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-4" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="5">
                      <div className="css-166hnro" onClick={openPanel} data-pid="5">
                        <div className="css-ae809u" data-pid="5">
                          <svg data-pid="5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="5">Can I test before I purchase?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel5} role="region" aria-labelledby="accordion__heading-raa-4" id="accordion__panel-raa-4" >
                    <div className="css-1chvpb5">We do offer a 14-days trial plan on our cloud hosting that includes all addons. Alternatively, you can <a href="https://billing.mumara.com/cart.php?a=add&amp;pid=4">click here</a> to deploy a trial plan.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open6} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-5" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-5" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="6">
                      <div className="css-166hnro" onClick={openPanel} data-pid="6">
                        <div className="css-ae809u" data-pid="6">
                          <svg data-pid="6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="6">Do I get an SMTP or IP address?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel6} role="region" aria-labelledby="accordion__heading-raa-5" id="accordion__panel-raa-5">
                    <div className="css-1chvpb5">This edition is hosted on our cloud network and doesn’t come up with any SMTP. You’ll need to connect to any third-party SMTP or any other integrated ESP account e.g. Amazon SES, Sengdrid, Mailgun, Mailjet, Sparkpost, Elastic Email and more. Mumara doesn’t provide any SMTP or IP addresses with this edition of the product. If you are looking for an email service, you may look into our other product <a href="https://mumara.com/one/">MumaraOne</a>.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
              <div className="css-1l3rlkf">
                <div data-accordion-component="AccordionItem" className="accordion__item">
                  <div data-accordion-component="AccordionItemHeading" role="heading" className={"accordion__heading"+state.open7} aria-level="3">
                    <div className="accordion__button" id="accordion__heading-raa-6" aria-disabled="false" aria-expanded="false" aria-controls="accordion__panel-raa-6" role="button" tabIndex="0" data-accordion-component="AccordionItemButton" data-pid="7">
                      <div className="css-166hnro" onClick={openPanel} data-pid="7">
                        <div className="css-ae809u" data-pid="7">
                          <svg data-pid="7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1p2ypg7">
                            <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"></path>
                            <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"></path>
                          </svg>
                        </div>
                        <h5 className="css-8tdzxf" data-pid="7">What server specs do I need?</h5>
                      </div>
                    </div>
                  </div>
                  <div data-accordion-component="AccordionItemPanel" className={`accordion__panel `+state.panel7} role="region" aria-labelledby="accordion__heading-raa-6" id="accordion__panel-raa-6">
                    <div className="css-1chvpb5">We have designed the server plans as per the number of users you are going to host. So select the plan that matches your contact list size.</div>
                    <div className="css-1jzi1b4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </div>
    </div>

    <Helmet>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" integrity="sha384-EvBWSlnoFgZlXJvpzS+MAUEjvN7+gcCwH+qh7GRFOGgZO0PuwOFro7qPOJnLfe7l" crossorigin="anonymous" />
    </Helmet>
      
  </div>
  )
}

export default PriceBlock01;