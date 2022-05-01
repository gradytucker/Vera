const permissionsJSON = {
	0: 'water bill',
	1: 'gas bill',
	2: 'internet bill',
	3: 'phone bill',
	4: 'gender',
	5: 'COVID report',
	6: 'insurance type',
	7: 'license type',
	8: 'pharmacy script',
	9: 'taxes paid',
	10: 'taxes outstanding',
	11: 'metro balance',
	12: 'road toll balance',
	13: 'allergy',
	14: 'blood type',
	15: 'vital condition',
	16: 'police record',
	17: 'given name',
	18: 'surname',
	19: 'age',
	20: 'nationality',
	21: 'title',
};

const serviceLevelsJSON = {
	'0x5c9580b38556c8f5c25411a35404f6c618057e32': {
		name: 'police officer',
		permissionbits: '[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]',
	},

	'0x2f7e17df8dc2db7cada6f18f4b8a7718d5b67391': {
		name: 'paramedic',
		permissionbits: '[0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]',
	},

	'0x7a1e966d1bdb4231b82c62e7de59e338c897832d': {
		name: 'bouncer',
		permissionbits: '[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]',
	},

	'0x3db35b4b935f39280a6720ac6b1be8ac030d1db6': {
		name: 'pharmacist',
		permissionbits: '[0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]',
	},

	'0xfaacaec5bfefc6a82063cbb1ff98d0eddae660ed': {
		name: 'federal officer',
		permissionbits: '[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]',
	},

	'0xad77ecaa3e8b068840b4d12baa179805d8eaf0dc': {
		name: 'vera user',
		permissionbits: '[0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]',
	},

	'0x17912977c84beaf1f5f228f1dd7782fa6bf7f574': {
		name: 'normal user',
		permissionbits: '[0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]',
	},
};

export { permissionsJSON, serviceLevelsJSON };
