/* @flow */
import _ from "underscore";
import { titleize } from "underscore.string";

export default class Location {
    building: string;
    flat_unit: string;
    level: string;
    point: {
        "lat": number,
        "lon": number
    };
    postcode: string;
    state: state;
    street_name: string;
    street_number: string;
    street_suffix: string;
    street_type: string;
    suburb: string;

    constructor(props: issLocation) {
        Object.assign(this, props);
    }

    /* If there is no point value, that means it's being suppressed */
    isConfidential(): boolean {
        return !Boolean(this.point);
    }

    streetAddressLine1(): string {
        if (this.isConfidential()) {
            return "Confidential location";
        }

        let addrDescriptors = [
            this.flat_unit,
            this.level,
            this.building,
        ].map(text => text.trim());

        // FIXME: find a way to make this way clearer
        addrDescriptors = _(addrDescriptors)
            .compact()
            .map(part => `${part}, `)
            .join("");

        let street = [
            titleize(this.street_number),
            titleize(this.street_name),
            titleize(this.street_type),
            titleize(this.street_suffix),
        ].join(" ").trim();

        return addrDescriptors + street;
    }

    streetAddressLine2(): string {
        return [
            titleize(this.suburb),
            this.state,
            titleize(this.postcode),
        ].join(" ").trim();
    }
}