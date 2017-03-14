/**
 * Created by jibin on 17/3/6.
 */
import React, {Component} from 'react';
import classNames from 'classnames';

import styles from './m.css';

let noop = ()=>{};

class Switch extends Component{

    constructor(props){
        super(props);
        //const props = this.props;
        let checked = false;
        if('checked' in this.props){
            checked = !!this.props.checked;
        }else{
            checked = !!this.props.defaultChecked;
        }
        this.state = {checked};
    }

    static defaultProps = {
        prefixCls: 'bin-switch',
        className: '',
        defaultChecked: false,
        onChange: noop,
        checkedChild: null,
        unCheckedChild: null
    };

    static PropTypes = {
        prefixCls: React.PropTypes.string,
        className: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        onChange: React.PropTypes.func,
        checkedChild: React.PropTypes.any,
        unCheckedChild: React.PropTypes.any
    };

    componentWillReceiveProps(nextProps){
        console.log("in componentWillReceiveProps.");
        //console.log(nextProps);
        //alert("in componentWillReceiveProps.");
        if('checked' in nextProps){
            this.setState({
                checked: !!nextProps.checked
            });
        }
    }

    handleClick(){
        console.log("handleClick run");
        this.props.onChange();
    }
    /*
    handleClick2(e){
        e.preventDefault();
        const toggledValue = !this.state.checked;
        this.setState({checked: toggledValue});
    }
    */

    render(){
        //console.log("in switch render");
        console.log(this.props.checked);
        const {className, prefixCls, disabled} = this.props;

        const checked = this.state.checked;
        //console.log(checked);
        const switchClassName = classNames({
            [styles[className]]: !!className,
            [styles[prefixCls]]: true,
            [styles[`${prefixCls}-checked`]]: checked,
            [styles[`${prefixCls}-disabled`]]: disabled
        });

        return(
            <span className={switchClassName} onClick={this.handleClick.bind(this)}>
                <span className={styles[`${prefixCls}-inner`]}>
                    {checked? this.props.checkedChild : this.props.unCheckedChild}
                </span>
            </span>
        );
    }
}

export default Switch;