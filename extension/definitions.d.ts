
interface HTMLElement {
    assignedCssLabel?: string
}
interface LabelToSolve {
    element: HTMLAnchorElement
    identifier: string
}
type LabelKind = 't-friendly' | 'transphobic' | 'none' | '' | 'bad-identifier';
interface AeroEyeSubmission {
    mark?: LabelKind
    url?: string
    tabId?: number
    frameId?: number
    debug?: number
    identifier?: string
    secondaryIdentifier?: string
    version?: number
    submissionId?: string
    contextPage?: string
    linkId?: number
    snippet?: string
    trimmed?: boolean
    bloomVersion?: number
    reason?: string
    contextUrl?: string
}
interface AeroEyeCommand {
    acceptClicked?: boolean
    myself?: string
    ids?: string[]
    updateAllLabels?: boolean
    closeCallingTab?: boolean
    setTheme?: string
    confirmSetIdentifier?: string
    confirmSetLabel?: LabelKind
    confirmSetUrl?: string
    badIdentifierReason?: BadIdentifierReason
    displayReason?: { reason: string, contextUrl: string }
}
type LabelMap = { [identifier: string]: LabelKind };

interface AeroEyeMessage extends AeroEyeSubmission, AeroEyeCommand {
}

type ContextMenuCommand = 'mark-t-friendly' | 'mark-transphobic' | 'mark-none' | 'help' | 'options' | 'separator' | 'view-reason';
type BadIdentifierReason = 'SN' | 'AR';