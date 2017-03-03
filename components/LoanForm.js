import React, { Component } from 'react';
import LoanFormInput from './LoanFormInput';

class LoanForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {

        };
    }

    handleSubmit(event) {
      console.log('Hello Moto')
      event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type ===  'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(this.state[name]);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <h2>General Information</h2>
                        <LoanFormInput header='Casefile ID' type='text' name='casefileid' onChange={this.handleChange} />
                        <LoanFormInput header='Borrower Social Security Number Certification Indicator' type='checkbox' name='borrowerSocCert' onChange={this.handleChange} />
                        <LoanFormInput header='Co-Borrower Social Security Number Certification Indicator' type='checkbox' name='coborrowerSocCert' onChange={this.handleChange} />
                    </div>
                    <div>
                        <h2>Property Flood Information</h2>
                        <LoanFormInput header='Property Flood Area Indicator' type='checkbox' name='propertyFloodAreaInd' onChange={this.handleChange} />
            {this.state.propertyFloodAreaInd}
                        <LoanFormInput header='Property Flood Determination Company Name' type='text' name='propertyFloodDetCo' onChange={this.handleChange} />
                        <LoanFormInput header='Property Flood Determination Date' type='date' name='propertyFloodDetDate' onChange={this.handleChange} />
                        <LoanFormInput header='Property Flood Determination Last Revised Date' type='date' name='propertyFloodLastRevDate' onChange={this.handleChange} />
                        <LoanFormInput header='Property Flood Determination Letter Of Map Revision Date' type='date' name='propertyFloodDetLetterMapRev' onChange={this.handleChange} />
                        <LoanFormInput header='Property Flood Community Status Indicator' type='checkbox' name='propertyFloodCertCommStatusInd' onChange={this.handleChange} />
                    </div>
                    <div>
                        <h2>Property Tax Information</h2>
                        <div>
                            <h3>County Tax</h3>
                            <LoanFormInput header='Property County Tax Indicator' type='checkbox' name='propertyCountyTaxInd' onChange={this.handleChange} />
                            <LoanFormInput header='Property County Tax Parcel Number' type='text' name='propertyCountyTaxParcelNumber' onChange={this.handleChange} />
                            <LoanFormInput header='Property County Tax Authority Name' type='text' name='propertyCountyTaxAuthName' onChange={this.handleChange} />
                        </div>
                        <div>
                            <h3>City Tax</h3>
                            <LoanFormInput header='Property City Tax Indicator' type='checkbox' name='propertyCityTaxInd' onChange={this.handleChange} />
                            <LoanFormInput header='Property City Tax Parcel Number' type='text' name='propertyCityTaxParcelNumber' onChange={this.handleChange} />
                            <LoanFormInput header='Property City Tax Authority Name' type='text' name='propertyCityTaxAuthName' onChange={this.handleChange} />
                        </div>
                        <div>
                            <h3>School Tax</h3>
                            <LoanFormInput header='Property School Tax Indicator' type='checkbox' name='propertySchoolTaxInd' onChange={this.handleChange} />
                            <LoanFormInput header='Property School Tax Parcel Number' type='text' name='propertySchoolTaxParcelNumber' onChange={this.handleChange} />
                            <LoanFormInput header='Property School Tax Authority Name' type='text' name='propertySchoolTaxAuthName' onChange={this.handleChange} />
                        </div>
                        <div>
                            <h3>Town Tax</h3>
                            <LoanFormInput header='Property Town Tax Indicator' type='checkbox' name='propertyTownTaxInd' onChange={this.handleChange} />
                            <LoanFormInput header='Property Town Tax Parcel Number' type='text' name='propertyTownTaxParcelNumber' onChange={this.handleChange} />
                            <LoanFormInput header='Property Town Tax Authority Name' type='text' name='propertyTownTaxAuthName' onChange={this.handleChange} />
                        </div>
                        <div>
                            <h3>Other Tax</h3>
                            <LoanFormInput header='Property Other Tax Indicator' type='checkbox' name='propertyOtherTaxInd' onChange={this.handleChange} />
                            <LoanFormInput header='Property Other Tax Parcel Number' type='text' name='propertyOtherTaxParcelNumber' onChange={this.handleChange} />
                            <LoanFormInput header='Property Other Tax Authority Name' type='text' name='propertyOtherTaxAuthName' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div>
                        <h2>Loan Note/Interest Rate</h2>
                        <LoanFormInput header='Loan Note Late Fee Option Type Code' type='text' name='LoanNoteLateFeeOption' onChange={this.handleChange} />
                        <LoanFormInput header='Loan Interest Rate Buydown Balance Purchased Amount' type='text' name='LoanInterestRateBuydownBalance' onChange={this.handleChange} />
                        <LoanFormInput header='Loan Interest Rate Original Buydown Balance Amount' type='text' name='LoanInterestRateOriginalBuydownBalance' onChange={this.handleChange} />
                        <LoanFormInput header='Loan Interest Rate Buydown Term' type='text' name='LoanInterestRateBuydownTerm' onChange={this.handleChange} />
                        <LoanFormInput header='Loan Interest Rate Buydown First Payment Amount' type='text' name='LoanInterestRateBuydownFirstPayment' onChange={this.handleChange} />
                        <LoanFormInput header='Loan Interest Rate Buydown Second Payment Amount' type='text' name='LoanInterestRateBuydownSecondPayment' onChange={this.handleChange} />
                     </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}





export default LoanForm;
