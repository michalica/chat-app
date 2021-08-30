import Chat from "./Chat";
import { shallow} from "enzyme";

describe("snapshot testing", () => {
    it('should render view correctly', () => {
        expect(
            shallow(<Chat
            messageArea={<div>message area</div>}
            userArea={<div>user area</div>}
        />)
        ).toMatchSnapshot();
    });
})
