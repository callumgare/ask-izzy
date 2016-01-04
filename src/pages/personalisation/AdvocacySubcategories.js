/* @flow */

import BaseMultiQuestion from "./BaseMultiQuestion";
import { remove } from "./BaseQuestion";

export default class AdvocacySubcategories extends BaseMultiQuestion {
    static propTypes = BaseMultiQuestion.propTypes;
    static defaultProps = {
        name: "sub-advocacy",
        question: "What do you want help with or advice about?",
        answers: {
            "Making a complaint":
                remove("consumer issues mediation discrimination")
                .remove("disputes advocacy")
                .append("ombudsman complaint"),
            "Help working out a problem with a service":
                remove("consumer issues discrimination disputes advocacy"),
            "Get advice on your rights":
                remove("consumer issues discrimination disputes")
                .remove("advocacy mediation").append("rights advice"),
            "Someone to speak for you":
                remove("consumer issues mediation discrimination disputes"),
        },
    };
}
