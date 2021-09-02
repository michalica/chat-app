import {shallow} from "enzyme";
import Container from "./Container";

describe("snapshot testing", () => {
    it('should render Container with children correctly', () => {
        expect(shallow(<Container>
            <div>Testing content</div>
        </Container>)).toMatchSnapshot();
    })
})
