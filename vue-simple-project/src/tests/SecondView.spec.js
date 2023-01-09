import {render} from "@testing-library/vue";
import SecondView from "@/components/SecondView.vue";

test("SecondView", function () {
    const view = render(SecondView, {props: {}});

    view.getByText("Second view");
});