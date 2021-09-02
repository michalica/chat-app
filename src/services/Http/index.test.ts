import fetchMock from "fetch-mock";
import {fetchFrom, postTo} from "./Http";

const TEST_URL = 'http://test.com';

describe("expectation tests", () => {
    afterEach(() => {
        fetchMock.restore();
    })

    it('should fetchFrom correctly', async () => {

        const fetchBody = {
            test: 'test',
        };
        fetchMock.getOnce(TEST_URL, {
            body: fetchBody,
        });

        const response = await fetchFrom(TEST_URL);

        expect(response).toEqual(fetchBody);
    })

    it('should postTo correctly', async () => {

        const fetchBody = {
            test: 'test',
        };
        fetchMock.postOnce(TEST_URL, {
            body: fetchBody,
        });

        const response = await postTo(TEST_URL, {});

        expect(response).toEqual(fetchBody);
    })

    // TODO: ERROR CASES
})
