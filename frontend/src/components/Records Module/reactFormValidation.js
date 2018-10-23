


class FormContainer extends Component {  
    constructor(props) {
      super(props);
      this.state = {
        ownerName: '',
        petSelections: [],
        selectedPets: [],
        ageOptions: [],
        ownerAgeRangeSelection: '',
        siblingOptions: [],
        siblingSelection: [],
        currentPetCount: 0,
        description: ''
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
      this.handleFullNameChange = this.handleFullNameChange.bind(this);
      this.handleCurrentPetCountChange = this.handleCurrentPetCountChange.bind(this);
      this.handleAgeRangeSelect = this.handleAgeRangeSelect.bind(this);
      this.handlePetSelection = this.handlePetSelection.bind(this);
      this.handleSiblingsSelection = this.handleSiblingsSelection.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }
    componentDidMount() {
      // simulating a call to retrieve user data
      // (create-react-app comes with fetch polyfills!)
      fetch('./fake_db.json')
        .then(res => res.json())
        .then(data => {
          this.setState({
            ownerName: data.ownerName,
            petSelections: data.petSelections,
            selectedPets: data.selectedPets,
            ageOptions: data.ageOptions,
            ownerAgeRangeSelection: data.ownerAgeRangeSelection,
            siblingOptions: data.siblingOptions,
            siblingSelection: data.siblingSelection,
            currentPetCount: data.currentPetCount,
            description: data.description
          });
        });
    }
    handleFullNameChange(e) {
      this.setState({ ownerName: e.target.value });
    }
    handleCurrentPetCountChange(e) {
      this.setState({ currentPetCount: e.target.value });
    }
    handleAgeRangeSelect(e) {
      this.setState({ ownerAgeRangeSelection: e.target.value });
    }
    handlePetSelection(e) {
      const newSelection = e.target.value;
      let newSelectionArray;
      if(this.state.selectedPets.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.selectedPets.filter(s => s !== newSelection)
      } else {
        newSelectionArray = [...this.state.selectedPets, newSelection];
      }
      this.setState({ selectedPets: newSelectionArray });
    }
    handleSiblingsSelection(e) {
      this.setState({ siblingSelection: [e.target.value] });
    }
    handleDescriptionChange(e) {
      this.setState({ description: e.target.value });
    }
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        ownerName: '',
        selectedPets: [],
        ownerAgeRangeSelection: '',
        siblingSelection: [],
        currentPetCount: 0,
        description: ''
      });
    }
    handleFormSubmit(e) {
      e.preventDefault();
  
      const formPayload = {
        ownerName: this.state.ownerName,
        selectedPets: this.state.selectedPets,
        ownerAgeRangeSelection: this.state.ownerAgeRangeSelection,
        siblingSelection: this.state.siblingSelection,
        currentPetCount: this.state.currentPetCount,
        description: this.state.description
      };
  
      console.log('Send this in a POST request:', formPayload)
      this.handleClearForm(e);
    }
    render() {
      return (
        <form className="container" onSubmit={this.handleFormSubmit}>
          <h5>Pet Adoption Form</h5>
          <SingleInput
            inputType={'text'}
            title={'Full name'}
            name={'name'}
            controlFunc={this.handleFullNameChange}
            content={this.state.ownerName}
            placeholder={'Type first and last name here'} />
          <Select
            name={'ageRange'}
            placeholder={'Choose your age range'}
            controlFunc={this.handleAgeRangeSelect}
            options={this.state.ageOptions}
            selectedOption={this.state.ownerAgeRangeSelection} />
          <CheckboxOrRadioGroup
            title={'Which kinds of pets would you like to adopt?'}
            setName={'pets'}
            type={'checkbox'}
            controlFunc={this.handlePetSelection}
            options={this.state.petSelections}
            selectedOptions={this.state.selectedPets} />
          <CheckboxOrRadioGroup
            title={'Are you willing to adopt more than one pet if we have siblings for adoption?'}
            setName={'siblings'}
            controlFunc={this.handleSiblingsSelection}
            type={'radio'}
            options={this.state.siblingOptions}
            selectedOptions={this.state.siblingSelection} />
          <SingleInput
            inputType={'number'}
            title={'How many pets do you currently own?'}
            name={'currentPetCount'}
            controlFunc={this.handleCurrentPetCountChange}
            content={this.state.currentPetCount}
            placeholder={'Enter number of current pets'} />
          <TextArea
            title={'If you currently own pets, please write their names, breeds, and an outline of their personalities.'}
            rows={5}
            resize={false}
            content={this.state.description}
            name={'currentPetInfo'}
            controlFunc={this.handleDescriptionChange}
            placeholder={'Please be thorough in your descriptions'} />
          <input
            type="submit"
            className="btn btn-primary float-right"
            value="Submit"/>
          <button
            className="btn btn-link float-left"
            onClick={this.handleClearForm}>Clear form</button>
        </form>
      );
    }
  }
  
  export default FormContainer;