using {db} from '../db/schema';

service MyService {


    @odata.draft.enabled
    entity addition as projection on db.addition;

    annotate addition with @Common.SideEffects: {
        SourceProperties: [
            'firstnum',
            'secondnum'
        ],
        TargetProperties: ['result'],
    };


}
