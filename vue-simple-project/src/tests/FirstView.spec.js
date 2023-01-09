import {render} from "@testing-library/vue";
import FirstView from "../components/FirstView.vue";

test('FirstView', async () => {
    const component = render(FirstView, {props: {}});
    let btn = await component.findByTitle("Clickme");
    await btn.click();
    component.getByText("Click count 1");
});