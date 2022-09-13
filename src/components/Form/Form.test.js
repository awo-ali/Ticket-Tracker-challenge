import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../../App";
import Form from "./Form"; 

describe("initial tests for React App" , () => {

    it("should render button on page load", () => {

//Arrange
render(<App/>);


//Act

const button = screen.getByText(/Click For New Employee/i)
userEvent.click(button)


//Assert

expect(button).toBeInTheDocument

    })

    it("should render title on page load", () => {

        //Arrange
        render(<App/>);
        
        
        //Act
        
        const title = screen.getByText("Ticket Tracker")
       
        
        
        //Assert
        
        expect(title).toBeInTheDocument
        
        
        
        
            })

});